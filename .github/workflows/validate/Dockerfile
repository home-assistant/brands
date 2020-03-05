FROM alpine
RUN apk add --no-cache imagemagick bash
COPY validate.sh /validate.sh
ENTRYPOINT ["/validate.sh"]
