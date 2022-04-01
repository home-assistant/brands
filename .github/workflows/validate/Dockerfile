FROM alpine
RUN apk add --no-cache imagemagick bash git
COPY validate.sh /validate.sh
ENTRYPOINT ["/validate.sh"]
