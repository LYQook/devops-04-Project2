![Untitled (3)](https://user-images.githubusercontent.com/126463472/235673251-b4d32310-c55c-44d2-93f9-b0ac3718d91e.png)


# ✔ 실습내용
- was 및 mongoDB 이미지를 AWS ECS를 통해 배포
  - Github Action을 통해 빌드와 배포 자동화를 했습니다
    aws서비스 안에서 pipeline과 build가 가능하지만 해보지 않은 Github Action을 사용해보고 싶었음
- CDN(CloudFront)을 통해 프론트엔드를 캐싱하고, HTTPS를 적용
- 프론트엔드와 WAS를 연결
---

[23.04.27 **마일스톤1 - Hello World 서버 컨테이너화**](https://www.notion.so/23-04-27-1-Hello-World-04217dd2e48f4a52baa565ffc22f3bfa)

[23.04.27 **마일스톤2 - docker-compose 작성**](https://www.notion.so/23-04-27-2-docker-compose-556bcf478ef94804957a3fdeb42d5efb)

[23.04.27 **마일스톤3 - 이미지 repository push 자동화**](https://www.notion.so/23-04-27-3-repository-push-7f7f94f1b22a4f919611ca9d93426000)

[23.04.28 **마일스톤4 - 이미지 ECS 배포**](https://www.notion.so/23-04-28-4-ECS-73d65f006ace486a9d8735e21ae6e823)

[23.4.28 **마일스톤5 - 서버 이미지 ECS 배포 자동화**](https://www.notion.so/23-4-28-5-ECS-a8e81230002046ac9da1e6851e75ad1d)

[23.4.28 **마일스톤6 - 서버 애플리케이션의 HTTPS 적용**](https://www.notion.so/23-4-28-6-HTTPS-fb783f2db92c408aa195e7afcb1d2c69)

[23.5.1 **마일스톤7 - 프론트엔드 배포 자동화**](https://www.notion.so/23-5-1-7-c7e724b70fb44d13817428764e8066dd)

[23.5.1 **마일스톤8 - 프론트엔드 HTTPS 적용**](https://www.notion.so/23-5-1-8-HTTPS-950e8462b6d34b8094b0e2ac3f816f1d)

[23.5.1 **마일스톤9 - 프론트엔드-서버 연결 확인**](https://www.notion.so/23-5-1-9-a5b892755a7849e79795665bc22b215c)

# ✔ 주의
- 프론트와 reopsitorie가 나뉘어 있어서 구현은 안됩니다.
