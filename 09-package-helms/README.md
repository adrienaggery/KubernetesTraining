# installer helm
https://helm.sh/docs/intro/install/

# commandes
Initialiser un projet helm
`helm init`

Installer un package helm:
`helm upgrade --dependency-update --install --namespace <namespace> <nom_de_linstall> <chemin_vers_dossier_helm> -f <chemin_vers_values>`

