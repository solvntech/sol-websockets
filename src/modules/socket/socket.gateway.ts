import { ConnectedSocket, MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { SocketService } from '@modules/socket/socket.service';
import { CreateMessageDto } from '@modules/socket/dto/create-message.dto';
import { Server, Socket } from 'socket.io';
import { Logger } from '@nestjs/common';

@WebSocketGateway({
    cors: {
        origin: '*',
    },
})
export class SocketGateway {
    @WebSocketServer()
    server: Server;

    constructor(private readonly _SocketService: SocketService) {}

    @SubscribeMessage('findAllMessages')
    findAll() {
        return this._SocketService.findAll();
    }

    @SubscribeMessage('createMessage')
    create(@MessageBody() createMessageDto: CreateMessageDto) {
        const message = this._SocketService.createMessage(createMessageDto);

        return this.server.emit('message', message);
    }

    @SubscribeMessage('join')
    joinRoom(@MessageBody('name') name: string, @ConnectedSocket() client: Socket) {
        // todo
    }
}
