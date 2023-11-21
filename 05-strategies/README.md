# 05-strategies

## Objectif
Builder puis tagger cette image

Pousser l'image sur le registry du cluster

Installer le fichier yaml sur le cluster

## Installer un object kubernetes a partir d'un yaml

```shell
kubectl apply -f <chemin_vers_yaml> --namespace=<nom_namespace>
```



## Documentation des strategies
https://kubernetes.io/docs/concepts/workloads/controllers/deployment/#strategy