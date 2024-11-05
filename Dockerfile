FROM node:20.18.0-alpine
WORKDIR /app
RUN apk add --no-cache python3 g++ make 
COPY . .
CMD [ "sh","-c","python3 -m http.serve 3000"]
EXPOSE 3000