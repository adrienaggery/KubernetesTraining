# 07-services-ingress

## Objectif

Dans /etc/hosts
Diriger les 127.0.0.1   ariane.local
Diriger les 127.0.0.1   app-ml.ariane.local

Ajouter un service et un ingress pour load balancer et rendre accessible les serveur depuis l'exterieur du cluster

## Installer un object kubernetes a partir d'un yaml

```shell
kubectl apply -f <chemin_vers_yaml> --namespace=<nom_namespace>
```



## Documentation des strategies
https://kubernetes.io/docs/concepts/services-networking/service/
https://kubernetes.io/docs/concepts/services-networking/ingress/