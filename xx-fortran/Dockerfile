FROM centos:7

WORKDIR /app

RUN yum -y install gcc
RUN yum -y install gcc-gfortran
RUN yum -y install openmpi openmpi-devel

COPY src/ src/

#RUN export PATH=$PATH:/usr/lib64/openmpi/bin

RUN /usr/lib64/openmpi/bin/mpif90 -v -o mpif90.exe src/pi3f90_mpi.f90