# build image : `docker build -t brapicoordinatorselby/brapi-test-client-backend ./`
# run container : `docker run --name=brapi-test-client-backend --network=bridge -d brapicoordinatorselby/brapi-test-client-backend`

FROM nimmis/java-centos:oracle-8-jre

EXPOSE 8080

RUN mkdir /home/brapi_cert

COPY target/brapiCertificationServer-0.0.1-SNAPSHOT.jar src/main/resources/application.properties /home/brapi_cert/

CMD java -cp "/home/brapi_cert/:/home/brapi_cert/brapiCertificationServer-0.0.1-SNAPSHOT.jar" org.springframework.boot.loader.JarLauncher