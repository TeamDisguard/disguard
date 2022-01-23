-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(20) NOT NULL,
    "username" VARCHAR(32) NOT NULL,
    "discriminator" CHAR(4) NOT NULL,
    "avatar" VARCHAR(34),
    "site_permissions" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" VARCHAR(18) NOT NULL,
    "invalid" BOOLEAN NOT NULL,
    "device" VARCHAR(255) NOT NULL,
    "access_token" VARCHAR(97) NOT NULL,
    "refresh_token" VARCHAR(97) NOT NULL,
    "token" CHAR(60) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expires_at" TIMESTAMP NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "sessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "applications" (
    "id" VARCHAR(18) NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "request_count" INTEGER NOT NULL,
    "request_limit" INTEGER NOT NULL,
    "request_limit_reset_at" TIMESTAMP NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,
    "owner_id" VARCHAR(20) NOT NULL,
    "user_id" VARCHAR(20) NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flags" (
    "id" VARCHAR(18) NOT NULL,
    "name" VARCHAR(128) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "color" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "flags_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reports" (
    "id" VARCHAR(18) NOT NULL,
    "user_id" VARCHAR(20) NOT NULL,
    "report_user_id" VARCHAR(20) NOT NULL,
    "flag_id" VARCHAR(18) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "reports_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "appeals" (
    "id" VARCHAR(18) NOT NULL,
    "reason" VARCHAR(400) NOT NULL,
    "is_successful" BOOLEAN NOT NULL,
    "resolved_reason" VARCHAR(400),
    "resolved_at" TIMESTAMP,
    "resolver_user_id" VARCHAR(20) NOT NULL,
    "report_id" VARCHAR(18) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP NOT NULL,

    CONSTRAINT "appeals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "users_id_idx" ON "users"("id");

-- CreateIndex
CREATE INDEX "sessions_id_idx" ON "sessions"("id");

-- CreateIndex
CREATE UNIQUE INDEX "applications_user_id_key" ON "applications"("user_id");

-- CreateIndex
CREATE INDEX "applications_id_name_idx" ON "applications"("id", "name");

-- CreateIndex
CREATE UNIQUE INDEX "flags_name_key" ON "flags"("name");

-- CreateIndex
CREATE INDEX "flags_id_name_idx" ON "flags"("id", "name");

-- CreateIndex
CREATE INDEX "reports_id_user_id_report_user_id_idx" ON "reports"("id", "user_id", "report_user_id");

-- CreateIndex
CREATE UNIQUE INDEX "appeals_report_id_key" ON "appeals"("report_id");

-- CreateIndex
CREATE INDEX "appeals_id_idx" ON "appeals"("id");

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "applications" ADD CONSTRAINT "applications_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_report_user_id_fkey" FOREIGN KEY ("report_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "reports" ADD CONSTRAINT "reports_flag_id_fkey" FOREIGN KEY ("flag_id") REFERENCES "flags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appeals" ADD CONSTRAINT "appeals_resolver_user_id_fkey" FOREIGN KEY ("resolver_user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "appeals" ADD CONSTRAINT "appeals_report_id_fkey" FOREIGN KEY ("report_id") REFERENCES "reports"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
