/**
 * @fileoverview gRPC-Web generated client stub for proto
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as studio_pb from './studio_pb';


export class StudioClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoStudioGet = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.StudioGetResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    studio_pb.StudioGetResponse.deserializeBinary
  );

  studioGet(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.StudioGetResponse>;

  studioGet(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.StudioGetResponse) => void): grpcWeb.ClientReadableStream<studio_pb.StudioGetResponse>;

  studioGet(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.StudioGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/StudioGet',
        request,
        metadata || {},
        this.methodInfoStudioGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/StudioGet',
    request,
    metadata || {},
    this.methodInfoStudioGet);
  }

  methodInfoStudioStart = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  studioStart(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  studioStart(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  studioStart(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/StudioStart',
        request,
        metadata || {},
        this.methodInfoStudioStart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/StudioStart',
    request,
    metadata || {},
    this.methodInfoStudioStart);
  }

  methodInfoStudioStop = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  studioStop(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  studioStop(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  studioStop(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/StudioStop',
        request,
        metadata || {},
        this.methodInfoStudioStop,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/StudioStop',
    request,
    metadata || {},
    this.methodInfoStudioStop);
  }

  methodInfoShowGet = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.ShowGetResponse,
    (request: studio_pb.ShowGetRequest) => {
      return request.serializeBinary();
    },
    studio_pb.ShowGetResponse.deserializeBinary
  );

  showGet(
    request: studio_pb.ShowGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.ShowGetResponse>;

  showGet(
    request: studio_pb.ShowGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.ShowGetResponse) => void): grpcWeb.ClientReadableStream<studio_pb.ShowGetResponse>;

  showGet(
    request: studio_pb.ShowGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.ShowGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/ShowGet',
        request,
        metadata || {},
        this.methodInfoShowGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/ShowGet',
    request,
    metadata || {},
    this.methodInfoShowGet);
  }

  methodInfoShowCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.ShowCreateResponse,
    (request: studio_pb.ShowCreateRequest) => {
      return request.serializeBinary();
    },
    studio_pb.ShowCreateResponse.deserializeBinary
  );

  showCreate(
    request: studio_pb.ShowCreateRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.ShowCreateResponse>;

  showCreate(
    request: studio_pb.ShowCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.ShowCreateResponse) => void): grpcWeb.ClientReadableStream<studio_pb.ShowCreateResponse>;

  showCreate(
    request: studio_pb.ShowCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.ShowCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/ShowCreate',
        request,
        metadata || {},
        this.methodInfoShowCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/ShowCreate',
    request,
    metadata || {},
    this.methodInfoShowCreate);
  }

  methodInfoShowDuplicate = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.ShowDuplicateResponse,
    (request: studio_pb.ShowDuplicateRequest) => {
      return request.serializeBinary();
    },
    studio_pb.ShowDuplicateResponse.deserializeBinary
  );

  showDuplicate(
    request: studio_pb.ShowDuplicateRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.ShowDuplicateResponse>;

  showDuplicate(
    request: studio_pb.ShowDuplicateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.ShowDuplicateResponse) => void): grpcWeb.ClientReadableStream<studio_pb.ShowDuplicateResponse>;

  showDuplicate(
    request: studio_pb.ShowDuplicateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.ShowDuplicateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/ShowDuplicate',
        request,
        metadata || {},
        this.methodInfoShowDuplicate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/ShowDuplicate',
    request,
    metadata || {},
    this.methodInfoShowDuplicate);
  }

  methodInfoShowRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: studio_pb.ShowRemoveRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  showRemove(
    request: studio_pb.ShowRemoveRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  showRemove(
    request: studio_pb.ShowRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  showRemove(
    request: studio_pb.ShowRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/ShowRemove',
        request,
        metadata || {},
        this.methodInfoShowRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/ShowRemove',
    request,
    metadata || {},
    this.methodInfoShowRemove);
  }

  methodInfoShowLoad = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.ShowLoadResponse,
    (request: studio_pb.ShowLoadRequest) => {
      return request.serializeBinary();
    },
    studio_pb.ShowLoadResponse.deserializeBinary
  );

  showLoad(
    request: studio_pb.ShowLoadRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.ShowLoadResponse>;

  showLoad(
    request: studio_pb.ShowLoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.ShowLoadResponse) => void): grpcWeb.ClientReadableStream<studio_pb.ShowLoadResponse>;

  showLoad(
    request: studio_pb.ShowLoadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.ShowLoadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/ShowLoad',
        request,
        metadata || {},
        this.methodInfoShowLoad,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/ShowLoad',
    request,
    metadata || {},
    this.methodInfoShowLoad);
  }

  methodInfoSceneGet = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SceneGetResponse,
    (request: studio_pb.SceneGetRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SceneGetResponse.deserializeBinary
  );

  sceneGet(
    request: studio_pb.SceneGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SceneGetResponse>;

  sceneGet(
    request: studio_pb.SceneGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SceneGetResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SceneGetResponse>;

  sceneGet(
    request: studio_pb.SceneGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SceneGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SceneGet',
        request,
        metadata || {},
        this.methodInfoSceneGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SceneGet',
    request,
    metadata || {},
    this.methodInfoSceneGet);
  }

  methodInfoSceneAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SceneAddResponse,
    (request: studio_pb.SceneAddRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SceneAddResponse.deserializeBinary
  );

  sceneAdd(
    request: studio_pb.SceneAddRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SceneAddResponse>;

  sceneAdd(
    request: studio_pb.SceneAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SceneAddResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SceneAddResponse>;

  sceneAdd(
    request: studio_pb.SceneAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SceneAddResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SceneAdd',
        request,
        metadata || {},
        this.methodInfoSceneAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SceneAdd',
    request,
    metadata || {},
    this.methodInfoSceneAdd);
  }

  methodInfoSceneDuplicate = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SceneDuplicateResponse,
    (request: studio_pb.SceneDuplicateRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SceneDuplicateResponse.deserializeBinary
  );

  sceneDuplicate(
    request: studio_pb.SceneDuplicateRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SceneDuplicateResponse>;

  sceneDuplicate(
    request: studio_pb.SceneDuplicateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SceneDuplicateResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SceneDuplicateResponse>;

  sceneDuplicate(
    request: studio_pb.SceneDuplicateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SceneDuplicateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SceneDuplicate',
        request,
        metadata || {},
        this.methodInfoSceneDuplicate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SceneDuplicate',
    request,
    metadata || {},
    this.methodInfoSceneDuplicate);
  }

  methodInfoSceneRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: studio_pb.SceneRemoveRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sceneRemove(
    request: studio_pb.SceneRemoveRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sceneRemove(
    request: studio_pb.SceneRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sceneRemove(
    request: studio_pb.SceneRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SceneRemove',
        request,
        metadata || {},
        this.methodInfoSceneRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SceneRemove',
    request,
    metadata || {},
    this.methodInfoSceneRemove);
  }

  methodInfoSceneSetAsCurrent = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SceneSetAsCurrentResponse,
    (request: studio_pb.SceneSetAsCurrentRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SceneSetAsCurrentResponse.deserializeBinary
  );

  sceneSetAsCurrent(
    request: studio_pb.SceneSetAsCurrentRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SceneSetAsCurrentResponse>;

  sceneSetAsCurrent(
    request: studio_pb.SceneSetAsCurrentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SceneSetAsCurrentResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SceneSetAsCurrentResponse>;

  sceneSetAsCurrent(
    request: studio_pb.SceneSetAsCurrentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SceneSetAsCurrentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SceneSetAsCurrent',
        request,
        metadata || {},
        this.methodInfoSceneSetAsCurrent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SceneSetAsCurrent',
    request,
    metadata || {},
    this.methodInfoSceneSetAsCurrent);
  }

  methodInfoSceneGetCurrent = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SceneGetCurrentResponse,
    (request: studio_pb.SceneGetCurrentRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SceneGetCurrentResponse.deserializeBinary
  );

  sceneGetCurrent(
    request: studio_pb.SceneGetCurrentRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SceneGetCurrentResponse>;

  sceneGetCurrent(
    request: studio_pb.SceneGetCurrentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SceneGetCurrentResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SceneGetCurrentResponse>;

  sceneGetCurrent(
    request: studio_pb.SceneGetCurrentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SceneGetCurrentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SceneGetCurrent',
        request,
        metadata || {},
        this.methodInfoSceneGetCurrent,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SceneGetCurrent',
    request,
    metadata || {},
    this.methodInfoSceneGetCurrent);
  }

  methodInfoSourceGet = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SourceGetResponse,
    (request: studio_pb.SourceGetRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SourceGetResponse.deserializeBinary
  );

  sourceGet(
    request: studio_pb.SourceGetRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SourceGetResponse>;

  sourceGet(
    request: studio_pb.SourceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SourceGetResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SourceGetResponse>;

  sourceGet(
    request: studio_pb.SourceGetRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SourceGetResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SourceGet',
        request,
        metadata || {},
        this.methodInfoSourceGet,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SourceGet',
    request,
    metadata || {},
    this.methodInfoSourceGet);
  }

  methodInfoSourceAdd = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SourceAddResponse,
    (request: studio_pb.SourceAddRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SourceAddResponse.deserializeBinary
  );

  sourceAdd(
    request: studio_pb.SourceAddRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SourceAddResponse>;

  sourceAdd(
    request: studio_pb.SourceAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SourceAddResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SourceAddResponse>;

  sourceAdd(
    request: studio_pb.SourceAddRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SourceAddResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SourceAdd',
        request,
        metadata || {},
        this.methodInfoSourceAdd,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SourceAdd',
    request,
    metadata || {},
    this.methodInfoSourceAdd);
  }

  methodInfoSourceDuplicate = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SourceDuplicateResponse,
    (request: studio_pb.SourceDuplicateRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SourceDuplicateResponse.deserializeBinary
  );

  sourceDuplicate(
    request: studio_pb.SourceDuplicateRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SourceDuplicateResponse>;

  sourceDuplicate(
    request: studio_pb.SourceDuplicateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SourceDuplicateResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SourceDuplicateResponse>;

  sourceDuplicate(
    request: studio_pb.SourceDuplicateRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SourceDuplicateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SourceDuplicate',
        request,
        metadata || {},
        this.methodInfoSourceDuplicate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SourceDuplicate',
    request,
    metadata || {},
    this.methodInfoSourceDuplicate);
  }

  methodInfoSourceRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: studio_pb.SourceRemoveRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  sourceRemove(
    request: studio_pb.SourceRemoveRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  sourceRemove(
    request: studio_pb.SourceRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  sourceRemove(
    request: studio_pb.SourceRemoveRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SourceRemove',
        request,
        metadata || {},
        this.methodInfoSourceRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SourceRemove',
    request,
    metadata || {},
    this.methodInfoSourceRemove);
  }

  methodInfoSourceSetProperties = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.SourceSetPropertiesResponse,
    (request: studio_pb.SourceSetPropertiesRequest) => {
      return request.serializeBinary();
    },
    studio_pb.SourceSetPropertiesResponse.deserializeBinary
  );

  sourceSetProperties(
    request: studio_pb.SourceSetPropertiesRequest,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.SourceSetPropertiesResponse>;

  sourceSetProperties(
    request: studio_pb.SourceSetPropertiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.SourceSetPropertiesResponse) => void): grpcWeb.ClientReadableStream<studio_pb.SourceSetPropertiesResponse>;

  sourceSetProperties(
    request: studio_pb.SourceSetPropertiesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.SourceSetPropertiesResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/SourceSetProperties',
        request,
        metadata || {},
        this.methodInfoSourceSetProperties,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/SourceSetProperties',
    request,
    metadata || {},
    this.methodInfoSourceSetProperties);
  }

  methodInfoHealth = new grpcWeb.AbstractClientBase.MethodInfo(
    studio_pb.HealthResponse,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    studio_pb.HealthResponse.deserializeBinary
  );

  health(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<studio_pb.HealthResponse>;

  health(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studio_pb.HealthResponse) => void): grpcWeb.ClientReadableStream<studio_pb.HealthResponse>;

  health(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studio_pb.HealthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/proto.Studio/Health',
        request,
        metadata || {},
        this.methodInfoHealth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/proto.Studio/Health',
    request,
    metadata || {},
    this.methodInfoHealth);
  }

}

