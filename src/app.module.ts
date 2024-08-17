import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './quiz/quiz.module';
import { UserModule } from './user/user.module';
import { QuestionModule } from './question/question.module';
import { VariantModule } from './variant/variant.module';
import { SessionModule } from './session/session.module';
import { AnswerModule } from './answer/answer.module';

@Module({
  imports: [QuizModule, UserModule, QuestionModule, VariantModule, SessionModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
