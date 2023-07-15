import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
    const port = 3000;
    const app = await NestFactory.create(AppModule);
    await app.listen(port).then(() => {
        Logger.log(`Server running at: http://127.0.0.1:${port}`);
    });
}
bootstrap();
