FROM centos:7 as compilator

WORKDIR /app

RUN yum -y install openmpi openmpi-devel

COPY src/ src/

RUN /usr/lib64/openmpi/bin/mpif90 -v -o mpif90.exe src/pi3f90_mpi.f90

FROM centos:7

WORKDIR /app

RUN yum -y install openmpi openmpi-devel

COPY --from=compilator /app/mpif90.exe .

