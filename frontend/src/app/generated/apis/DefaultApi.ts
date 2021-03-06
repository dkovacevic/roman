/* tslint:disable */
/* eslint-disable */
/**
 * Roman Swagger
 * Roman - Wire Bots Proxy
 *
 * The version of the OpenAPI document: 1.15.0
 * Contact: dejan@wire.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import {
  Conversation,
  ConversationFromJSON,
  IncomingMessage,
  IncomingMessageToJSON,
  NewService,
  NewServiceToJSON,
  NewUser,
  NewUserToJSON,
  OutgoingMessage,
  OutgoingMessageToJSON,
  PostMessageResult,
  PostMessageResultFromJSON,
  RegistrationSuccessful,
  RegistrationSuccessfulFromJSON,
  ServiceInformation,
  ServiceInformationFromJSON,
  SignIn,
  SignInToJSON,
  UpdateService,
  UpdateServiceToJSON,
  User,
  UserFromJSON,
} from '../models';

export interface CreateNewServiceRequest {
  body?: NewService;
}

export interface GetRequest {
  appKey?: string;
  id?: string;
}

export interface Get2Request {
  userId: string;
}

export interface LoginBotProviderRequest {
  body?: SignIn;
}

export interface PostRequest {
  appKey?: string;
  body?: IncomingMessage;
}

export interface Post1Request {
  body?: IncomingMessage;
}

export interface Post2Request {
  body?: OutgoingMessage;
}

export interface RegisterBotProviderRequest {
  body?: NewUser;
}

export interface UpdateServiceRequest {
  body?: UpdateService;
}

/**
 *
 */
export class DefaultApi extends runtime.BaseAPI {

  /**
   * Create new service.
   */
  async createNewServiceRaw(requestParameters: CreateNewServiceRequest): Promise<runtime.ApiResponse<ServiceInformation>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/service`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: NewServiceToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => ServiceInformationFromJSON(jsonValue));
  }

  /**
   * Create new service.
   */
  async createNewService(requestParameters: CreateNewServiceRequest): Promise<ServiceInformation> {
    const response = await this.createNewServiceRaw(requestParameters);
    return await response.value();
  }

  /**
   * Delete the Service
   */
  async deleteServiceRaw(): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/service`,
      method: 'DELETE',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Delete the Service
   */
  async deleteService(): Promise<void> {
    await this.deleteServiceRaw();
  }

  /**
   * Get latest broadcast report
   */
  async getRaw(requestParameters: GetRequest): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    if (requestParameters.id !== undefined) {
      queryParameters['id'] = requestParameters.id;
    }

    const headerParameters: runtime.HTTPHeaders = {};

    if (requestParameters.appKey !== undefined && requestParameters.appKey !== null) {
      headerParameters['app-key'] = String(requestParameters.appKey);
    }

    const response = await this.request({
      path: `/broadcast`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Get latest broadcast report
   */
  async get(requestParameters: GetRequest): Promise<void> {
    await this.getRaw(requestParameters);
  }

  /**
   * Get conversation data
   */
  async get1Raw(): Promise<runtime.ApiResponse<Conversation>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/conversation`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => ConversationFromJSON(jsonValue));
  }

  /**
   * Get conversation data
   */
  async get1(): Promise<Conversation> {
    const response = await this.get1Raw();
    return await response.value();
  }

  /**
   * Get user profile
   */
  async get2Raw(requestParameters: Get2Request): Promise<runtime.ApiResponse<User>> {
    if (requestParameters.userId === null || requestParameters.userId === undefined) {
      throw new runtime.RequiredError('userId', 'Required parameter requestParameters.userId was null or undefined when calling get2.');
    }

    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/users/{userId}`.replace(`{${"userId"}}`, encodeURIComponent(String(requestParameters.userId))),
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
  }

  /**
   * Get user profile
   */
  async get2(requestParameters: Get2Request): Promise<User> {
    const response = await this.get2Raw(requestParameters);
    return await response.value();
  }

  /**
   * Get the Service
   */
  async getServiceRaw(): Promise<runtime.ApiResponse<ServiceInformation>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request({
      path: `/service`,
      method: 'GET',
      headers: headerParameters,
      query: queryParameters,
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => ServiceInformationFromJSON(jsonValue));
  }

  /**
   * Get the Service
   */
  async getService(): Promise<ServiceInformation> {
    const response = await this.getServiceRaw();
    return await response.value();
  }

  /**
   * Login as Wire Bot Developer
   */
  async loginBotProviderRaw(requestParameters: LoginBotProviderRequest): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/login`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: SignInToJSON(requestParameters.body),
    });

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Login as Wire Bot Developer
   */
  async loginBotProvider(requestParameters: LoginBotProviderRequest): Promise<void> {
    await this.loginBotProviderRaw(requestParameters);
  }

  /**
   * Broadcast message on Wire
   */
  async postRaw(requestParameters: PostRequest): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    if (requestParameters.appKey !== undefined && requestParameters.appKey !== null) {
      headerParameters['app-key'] = String(requestParameters.appKey);
    }

    const response = await this.request({
      path: `/broadcast`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: IncomingMessageToJSON(requestParameters.body),
    });

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Broadcast message on Wire
   */
  async post(requestParameters: PostRequest): Promise<void> {
    await this.postRaw(requestParameters);
  }

  /**
   * Post message on Wire
   */
  async post1Raw(requestParameters: Post1Request): Promise<runtime.ApiResponse<PostMessageResult>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/conversation`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: IncomingMessageToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => PostMessageResultFromJSON(jsonValue));
  }

  /**
   * Post message on Wire
   */
  async post1(requestParameters: Post1Request): Promise<PostMessageResult> {
    const response = await this.post1Raw(requestParameters);
    return await response.value();
  }

  /**
   * Dummy. Bot developer should implement this
   */
  async post2Raw(requestParameters: Post2Request): Promise<runtime.ApiResponse<void>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/messages`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: OutgoingMessageToJSON(requestParameters.body),
    });

    return new runtime.VoidApiResponse(response);
  }

  /**
   * Dummy. Bot developer should implement this
   */
  async post2(requestParameters: Post2Request): Promise<void> {
    await this.post2Raw(requestParameters);
  }

  /**
   * Register as Wire Bot Developer
   */
  async registerBotProviderRaw(requestParameters: RegisterBotProviderRequest): Promise<runtime.ApiResponse<RegistrationSuccessful>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/register`,
      method: 'POST',
      headers: headerParameters,
      query: queryParameters,
      body: NewUserToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => RegistrationSuccessfulFromJSON(jsonValue));
  }

  /**
   * Register as Wire Bot Developer
   */
  async registerBotProvider(requestParameters: RegisterBotProviderRequest): Promise<RegistrationSuccessful> {
    const response = await this.registerBotProviderRaw(requestParameters);
    return await response.value();
  }

  /**
   * Update Service
   */
  async updateServiceRaw(requestParameters: UpdateServiceRequest): Promise<runtime.ApiResponse<ServiceInformation>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters['Content-Type'] = 'application/json';

    const response = await this.request({
      path: `/service`,
      method: 'PUT',
      headers: headerParameters,
      query: queryParameters,
      body: UpdateServiceToJSON(requestParameters.body),
    });

    return new runtime.JSONApiResponse(response, (jsonValue) => ServiceInformationFromJSON(jsonValue));
  }

  /**
   * Update Service
   */
  async updateService(requestParameters: UpdateServiceRequest): Promise<ServiceInformation> {
    const response = await this.updateServiceRaw(requestParameters);
    return await response.value();
  }

}
