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

## Project Structure

    ```
    tech-cheat-sheet/
    ├── Pulumi.yaml
    ├── Pulumi.dev.yaml
    ├── index.ts
    ├── package.json
    └── www/           # Your static website files go here
        └── index.html
        └── error.html
    ```

## Deployment

1. Deploy the infrastructure:

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

```

This README provides a comprehensive guide for setting up a static website on AWS using Pulumi. It includes:
1. Prerequisites and setup instructions
2. Project structure
3. Deployment steps
4. Configuration options
5. Clean-up instructions
6. Additional resources

You may want to customize the content based on your specific project requirements or add more detailed instructions for specific configurations.
