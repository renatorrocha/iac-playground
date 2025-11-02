import * as aws from "@pulumi/aws";

const firstBucket = new aws.s3.Bucket("primeiro-bucket", {
    tags: {
        IAC: "true"
    }
});

const secondBucket = new aws.s3.Bucket("second-bucket", {
    tags: {
        IAC: "true"
    }
})

const ecr = new aws.ecr.Repository("primeiro-ecr", {
    name: "primeiro-ecr",
    imageTagMutability: "IMMUTABLE",
    tags: {
        IAC: "true"
    }
})

export const firstBucketName = firstBucket.id;
export const secondBucketName = secondBucket.id;

export const ecrName = ecr.name;
export const ecrRepositoryUrl = ecr.repositoryUrl