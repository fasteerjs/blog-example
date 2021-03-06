# Migration `20210208011811-init`

This migration has been generated by Mia at 2/8/2021, 2:18:11 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorId" TEXT NOT NULL,

    FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY ("id")
)

CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20210208011811-init
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,25 @@
+datasource db {
+    provider = "sqlite"
+    url = "***"
+}
+
+generator client {
+    provider = "prisma-client-js"
+}
+
+model Post {
+    id        String   @id @default(uuid())
+    title     String
+    slug      String
+    content   String
+    createdAt DateTime @default(now())
+    author    User     @relation(fields: [authorId], references: [id])
+    authorId  String
+}
+
+model User {
+    id       String @id @default(uuid())
+    username String
+    password String
+    posts    Post[]
+}
```
