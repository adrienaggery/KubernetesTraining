# 04-jobs

## Objectif
Ecrire une ressource de type Job dans un fichier yaml

Le job lancé doit etre celui présent dans la doc de kubernetes

Installer le fichier yaml sur le cluster

## Installer un object kubernetes a partir d'un yaml

```shell
kubectl apply -f <chemin_vers_yaml> --namespace=<nom_namespace>
```

## Documentation des deployments
https://kubernetes.io/docs/concepts/workloads/controllers/job/#writing-a-job-spec