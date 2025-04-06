# From Code to Cloud: Deploy Your Static Website with Pulumi

This project demonstrates how to deploy a static website to AWS using Pulumi, configuring S3 for hosting and CloudFront for content delivery.

## Prerequisites

- [Pulumi CLI](https://www.pulumi.com/docs/get-started/install/)
- [Node.js](https://nodejs.org/en/download/)
- AWS CLI configured with appropriate credentials
- AWS Account

## Getting Started

1. Clone this repository:

    ```bash
    git clone https://github.com/yourusername/tech-cheat-sheet.git
    cd tech-cheat-sheet
    ```

2. Install Pulumi dependencies:

    ```bash
    npm install
    ```

3. Set up the frontend:

    ```bash
    cd frontend
    npm install
    ```

4. Configure your AWS credentials:

    ```bash
    aws configure
    ```

5. Build the frontend:

    ```bash
    cd frontend
    npm run build
    ```

   This will create a `dist` directory with static files.

6. Deploy with Pulumi from the tech-cheat-sheet folder:

    ```bash
    cd ..
    pulumi up
    ```

7. After deployment completes, you can access your website using the CloudFront URL provided in the output.

## Project Structure

    ```
    tech-cheat-sheet/
    ├── frontend/
    │   ├── .next/
    │   ├── app/
    │   ├── components/
    │   ├── dist/
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
