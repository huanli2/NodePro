# NodePro
some test project for node

DockerTest -- a simple node app used to test docker image build

#Docker commond

1.停止所有的container，这样才能够删除其中的images：docker stop $(docker ps -a -q)
2.如果想要删除所有container的话再加一个指令：docker rm $(docker ps -a -q)
3.删除images，通过image的id来指定删除谁: docker rmi <image id>
4.想要删除untagged images，也就是那些id为<None>的image的话可以用: docker rmi $(docker images | grep "^<none>" | awk "{print $3}")
