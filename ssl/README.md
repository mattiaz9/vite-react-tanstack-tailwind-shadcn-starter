# Instruction to generate an SSL certificate

## Using `mkcert`

### 1. Install mkcert

```
brew install mkcert
brew install nss # if you use Firefox
```

### 2. Global install (one time)

```
mkcert -install
```

### 3. Generate localhost cert

```
cd /path/to/your/project
mkcert -key-file ssl/key.pem -cert-file ssl/cert.pem localhost
```

## Using `openssl`

### 1. Generate localhost cert

```
cd /path/to/your/project
mkdir ssl # if it doesn't exist
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ssl/localhost.key -out ssl/localhost.crt
```
