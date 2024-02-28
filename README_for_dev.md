# Backend

## 1. Docker 설치

- https://www.docker.com \
  운영체제에 맞는 docker 다운로드 및 설치

- 터미널(cmd 등)에서 정상 설치 확인

```bash
$ docker -v
Docker version 20.10.17, build 100c701
```

<br>

## 2. Git Clone

```bash
$ git clone https://github.com/codelab-kr/vring.git && cd vring
```

<br>

<br>

## 3. 벡엔드 환경 파일 작성

- ./back 경로에 `.env` 파일을 작성한다.

```bash
$ cp ./back/.env.example ./back.env && vi ./back/.env # edit .env
```

<br>

## 4. AWS S3(파일 서버) 벡엔드 환경 파일 작성

- 이미지 업로드(aws) 기능 추가로 인해 설정 파일을 \
  아래 경로에 넣어둬야 백엔드 로컬 서버 기동이 가능

- Linux, Unix 및 macOS의 공유 자격 증명 파일 위치: `~/.aws/` \
  Windows의 공유 자격 증명 파일: `C:\Users\사용자이름\.aws\`

- 파일명: credentials, config (확장자 없음)

```bash
$ mkdir ~/.aws && vi ~/.aws/credentials
[default]
aws_access_key_id = <엑세스키아이디>
aws_secret_access_key = <시크릿키>

$vi ~/.aws/config
[default]
region = ap-northeast-2
output = json
```

<br>

## 5. 백엔드 라이브러리 설치

- node.js가 설치되어 있지 않으면 먼저 설치한다.

```bash
npm install --global yarn && yarn
```

<br>

## 6. Docker 에서 MySQL DB 실행

```bash
$ docker-compose up -d
```

<br>

## 7. Docker 정상실행 확인 <br>

![01](/back/doc/img/01.png)
<br><br>
![02](/back/doc/img/02.png)

<br>

## 8. 백엔드 실행

```bash
$ ./back/yarn start
```

<br>

## 9. 백엔드 서버 실행 확인

```bash
# 테이블 생성 로그.....
데이터베이스 연결 성공
서버 가동 ON PORT:  4000

```

<br>

## 10. 접속 및 API 동작을 테스트를 해본다.

- API URL 예시\
  http://localhost:4000/api/items
- Postman API Doc \
  https://tlabtlab.postman.co/workspace/%EC%97%98%EB%A6%AC%EC%8A%A4-2%EC%B0%A8~a97ebea0-6df0-4c1c-9b28-36781884caca/collection/17580924-59642a96-3ede-491a-a320-aa807a391a86?action=share&creator=17580924&active-environment=17580924-10c980be-98ae-4a00-9f29-0b25aca09259

<br>

## 11. DB 를 확인한다.

- DBeaver 툴 사용
  https://dbeaver.io <br><br>
  ![07](/back/doc/img/07.png)

  <br>

## 12. 포스트맨 테스트 방법

1. Local에서 테스트할지 VM에서 테스트할지 정하고, 해당 콜랙션으로 들어간다.

2. User API 에서 회원가입을 한다.

3. 로그인을 하고 응답 body 값을 확인한다.
   { userId : ....,
   "Authentication": "긴 JWT 코드" }

4. jwt 코드를 콜랙션(ex. Local)에 Authentication 에 붙여넣는다. <br><br>
   ![05](/back/doc/img/05.png)

5. userId 값을 콜랙션(ex. Local)에 Varables 의 userId의 VALUE 에 붙여넣는다. <br><br>
   ![06](/back/doc/img/06.png)

6. 이제 테스트를 진행한다.

<br>

# Frontend

## 1. 프론트엔드 라이브러리 설치

```bash
$ cd ./front && npm install
```

<br>

## 2. 프론트엔드 실행

```bash
$ ./front/npm start
```

## 3. 프론트엔드 브라우저 확인

http://localhost:3000
