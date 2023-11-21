# 04-jobs

## Objectif

Builder puis tagger cette image en deux version: 0.0.1 et 0.0.2

Pousser les images sur le registry du cluster

Installer le fichier yaml sur le cluster

## Installer un object kubernetes a partir d'un yaml

```shell
kubectl apply -f <chemin_vers_yaml> --namespace=<nom_namespace>
```



## Documentation des probes
https://kubernetes.io/fr/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/