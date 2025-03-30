# Static Website Hosting on AWS with Pulumi

This project demonstrates how to deploy a static website to AWS using Pulumi, configuring S3 for hosting and CloudFront for content delivery.

## Prerequisites

- [Pulumi CLI](https://www.pulumi.com/docs/get-started/install/)
- [Node.js](https://nodejs.org/en/download/)
- AWS CLI configured with appropriate credentials
- AWS Account

## Getting Started

1. Create a new Pulumi project:

    ```bash
    mkdir tech-cheat-sheet && cd tech-cheat-sheet
    pulumi new static-website-aws-typescript
    ```

2. Create a new folder for the frontend:

    ```bash
    mkdir frontend && cd frontend
    ```

3. Create a new Next.js project with default settings:

    ```bash
    npx create-next-app@latest .
    ```

4. Update the Pulumi Stack Settings:

    Update config in Pulumi.dev.yaml from `./www` to `./frontend/out`:

    ```txt
    tech-cheat-sheet:path: ./frontend/out
    ```

    Update path in index.ts from `./www` to `./frontend/out`:

    ```txt
    const path = config.get("path") || "./frontend/out";
    ```

    Remove the `www` folder from the project.

## Project Structure

    ```
    tech-cheat-sheet/
    ├── frontend/
    │   ├── .next/
    │   ├── app/
    │   ├── components/
    │   ├── out/
    │   ├── public/
    │   ├── styles/
    │   ├── tailwind.config.js
    │   ├── tsconfig.json
    │   ├── next.config.mjs
    │   ├── postcss.config.mjs
    │   ├── tailwind.config.js
    │   ├── tsconfig.json
    ├── Pulumi.yaml
    ├── Pulumi.dev.yaml
    ├── index.ts
    ├── package.json
    ```

## Build the Frontend

Run the following commands to build the frontend:

```bash
cd frontend
npm run build
```

## Deployment

1. Deploy the infrastructure:

    Run the following command to deploy the infrastructure:

    ```bash
    pulumi up
    ```

2. Once deployment is complete, Pulumi will output the CloudFront distribution URL or your custom domain where the website is accessible.

## Configuration

You can configure the following variables in your Pulumi config:

```bash
# Set the target AWS region
pulumi config set aws:region us-east-1

```

## Clean Up

To remove all resources created by this project:

```bash
pulumi destroy
```

## Additional Resources

- [Pulumi AWS Documentation](https://www.pulumi.com/docs/aws/)
- [AWS S3 Static Website Hosting](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
- [AWS CloudFront Documentation](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
