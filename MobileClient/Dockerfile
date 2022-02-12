FROM cirrusci/flutter
COPY ./area_app /app
WORKDIR /app
RUN rm -f .packages
RUN flutter pub get
RUN flutter clean
RUN flutter build apk
RUN cp build/app/outputs/apk/release/app-release.apk /client.apk
RUN mkdir /clients_shared
RUN cp /client.apk /clients_shared