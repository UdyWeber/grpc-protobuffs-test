#!/bin/bash

PROTO_DIR=./generated

# Generate JavaScript code
yarn run grpc_tools_node_protoc \
    --js_out=import_style=commonjs,binary:${PROTO_DIR} \
    --grpc_out="grpc_js:${PROTO_DIR}" \
    --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
    -I ./services \
    services/*.proto

# Generate TypeScript code (d.ts)
yarn run grpc_tools_node_protoc \
    --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
    --ts_out=${PROTO_DIR} \
    -I ./services \
    services/*.proto