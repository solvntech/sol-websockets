import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from '@modules/socket/dto/create-message.dto';
import { MessageEntity } from '@modules/socket/entities/message.entity';

@Injectable()
export class SocketService {
    private messages: MessageEntity[] = [{ name: 'system', text: 'hello' }];

    findAll() {
        return this.messages;
    }

    createMessage(createMessageDto: CreateMessageDto) {
        const message: MessageEntity = { ...createMessageDto };
        this.messages.push(message);
        return message;
    }
}
