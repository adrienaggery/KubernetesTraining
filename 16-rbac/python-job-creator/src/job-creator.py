import kubernetes
from pprint import pprint


def read_pods:
    for pod in kubernetes.client.ApiClient().client.list_namespaced_pods:
        pprint(pod)

read_pods()