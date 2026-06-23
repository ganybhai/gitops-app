output "cluster_name" { value = module.eks.cluster_name }
output "ecr_urls" {
  value = { for k, v in aws_ecr_repository.app : k => v.repository_url }
}
