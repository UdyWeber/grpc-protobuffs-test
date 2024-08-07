build-server:
	@echo "Building server"
	cargo build --bin test-server

clean:
	rm -rf codegen_impl

build-client: clean
	@echo "Building client"
	poetry run python -m grpc_tools.protoc -Icodegen_impl=services --python_out=. --pyi_out=. --grpc_python_out=. services/test.proto

build: build-client build-server
	@echo "Building full"

run: build
	poetry run python greeter_client.py