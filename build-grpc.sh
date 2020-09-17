#!/usr/bin/env bash

SCRIPT_DIR=$(dirname $(realpath "$0"))
PROTO_DIR=${SCRIPT_DIR}/src
OUT_DIR=${SCRIPT_DIR}/src/obs-headless

echo $SCRIPT_DIR $PROTO_DIR $OUT_DIR

rm -rf $OUT_DIR && mkdir $OUT_DIR
protoc -I=$PROTO_DIR studio.proto \
  --js_out=import_style=commonjs,binary:$OUT_DIR \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:$OUT_DIR
