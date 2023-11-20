# 03-deployments

## Objectif
Ecrire une ressource de type Deployment dans un fichier yaml

Le Deployment doit lancer des pods avec l'image nginx

Installer le fichier yaml sur le cluster

## Installer un object kubernetes a partir d'un yaml

```shell
kubectl apply -f <chemin_vers_yaml> --namespace=<nom_namespace>
```

## Documentation des deployments
https://kubernetes.io/fr/docs/concepts/workloads/controllers/deployment/