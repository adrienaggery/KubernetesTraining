# 02-pods 

## Objectif
Ecrire une ressource de type Pod dans un fichier yaml

Le Pod doit lancer l'image nginx

Installer le fichier yaml sur le cluster

## Installer un object kubernetes a partir d'un yaml

```shell
kubectl apply -f <chemin_vers_yaml> --namespace=<nom_namespace>
```

## Documentation des pods
https://kubernetes.io/fr/docs/concepts/workloads/pods/pod-overview/