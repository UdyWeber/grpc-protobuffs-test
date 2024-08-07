use tonic::{transport::Server, Request, Response, Status};

pub mod tests {
    tonic::include_proto!("test");
}

use tests::greeter_server::{GreeterServer, Greeter};
use tests::{HelloReply, HelloRequest};

#[derive(Debug, Default)]
pub struct GreeterService {}

#[tonic::async_trait]
impl Greeter for GreeterService {
    async fn say_hello(&self, request: Request<HelloRequest>) -> Result<Response<HelloReply>, Status> {
        let req = request.into_inner();
        Ok(Response::new(HelloReply {message: format!("Hello from {}!", req.name)}))
    }

    async fn say_hello_again(&self, request: Request<HelloRequest>) -> Result<Response<HelloReply>, Status> {
        let req = request.into_inner();
        Ok(Response::new(HelloReply {message: format!("Hello again from {}!!", req.name)}))

    }
}

#[tokio::main]
async fn main() -> Result<(), Box<dyn std::error::Error>> {
    let addr = "[::1]:50052".parse()?;
    let greet_service = GreeterService::default();

    Server::builder()
        .add_service(GreeterServer::new(greet_service))
        .serve(addr)
        .await?;

    Ok(())
}
