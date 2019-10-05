import { MigrationInterface, QueryRunner } from 'typeorm';

export class AuthProviders1570268617650 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
          "CREATE TABLE `auth_provider` ( \
          `slug` varchar(255) NOT NULL, \
          `name` varchar(255) NOT NULL, \
          `enabled` boolean DEFAULT false, \
          `clientId` varchar(255) NOT NULL DEFAULT 'EDIT_ME', \
          `redirectURL` varchar(255) NOT NULL DEFAULT 'EDIT_ME', \
          PRIMARY KEY (`slug`) \
        ) ENGINE=InnoDB CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;",
      );
    await queryRunner.query(`INSERT INTO auth_provider (slug, name) VALUES ('google', 'Google');`);
    await queryRunner.query(`INSERT INTO auth_provider (slug, name) VALUES ('github', 'GitHub');`);
    await queryRunner.query(`INSERT INTO auth_provider (slug, name) VALUES ('keycloak', 'KeyCloak');`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DELETE FROM auth_provider WHERE slug = 'google';`);
    await queryRunner.query(`DELETE FROM auth_provider WHERE slug = 'github';`);
    await queryRunner.query(`DELETE FROM auth_provider WHERE slug = 'keycloak';`);
    await queryRunner.query('DROP TABLE `auth_provider`');
  }
}
