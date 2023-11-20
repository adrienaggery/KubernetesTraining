# Installation

## Pré-requis
Docker desktop for linux: https://docs.docker.com/engine/install/

## Installer kubectl [(doc)](https://kubernetes.io/fr/docs/tasks/tools/install-kubectl/)


```shell
sudo apt-get update && sudo apt-get install -y apt-transport-https
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update
sudo apt-get install -y kubectl
```

Verifier l'installation
```shell
kubectl cluster-info
```

## Installer k3d [(doc)](https://k3d.io/v5.6.0/#installation)
```shell
curl -s https://raw.githubusercontent.com/k3d-io/k3d/main/install.sh | bash
```

## Creer un cluster et un registry k3d [(doc)](https://k3d.io/v5.6.0/usage/registries/#using-k3d-managed-registries)
```shell
k3d cluster create <nom_cluster> --registry-create <nom_registry>
```



Verifier la création du cluster
```shell
kubectl cluster-info
```

Verifier la création du registry
```shell
docker ps -f name=<nom_registry>
```

Vous pouvez maintenant pousser vos images docker sur votre registry local a l'adresse `localhost:<port>`

## Installer Openlens
https://github.com/MuhammedKalkan/OpenLens

## Installer le plugin `openlens-node-pod-menu`
Installer cette extension dans le menu extension de OpenLens `@alebcay/openlens-node-pod-menu`