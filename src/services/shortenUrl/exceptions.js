class InvalidUrlError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidUrlError";
  }
}

export default InvalidUrlError;
