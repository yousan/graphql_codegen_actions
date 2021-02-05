export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  AWSDate: any;
  AWSTime: any;
  AWSDateTime: any;
  AWSTimestamp: any;
  AWSEmail: any;
  AWSJSON: any;
  AWSURL: any;
  AWSPhone: any;
  AWSIPAddress: any;
  BigInt: any;
  Double: any;
}


















export interface IfCharacter {
  __typename?: 'Character';
  name: Scalars['String'];
  id: Scalars['String'];
}
