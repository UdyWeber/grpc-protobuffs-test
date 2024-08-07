fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Compile individual protocol buffers using tonic-build
    tonic_build::compile_protos("services/test.proto")?;
    Ok(())
}