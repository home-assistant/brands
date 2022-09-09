FROM alpine
RUN apk add --no-cache imagemagick bash git optipng
COPY validate.sh /validate.sh
ENTRYPOINT ["/validate.sh"]
