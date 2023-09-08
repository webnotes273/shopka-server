import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';

export const GetUserEmail = createParamDecorator((data, ctx: ExecutionContext) => {
  const req = ctx.switchToHttp().getRequest();

  // Let's assume we have user authentication
  // We are going to have a current user in the request
  const fakeCurrentUser = {
    id: 1,
    name: "Anton",
    email: "anton@gmail.com"
  };

  req.user = fakeCurrentUser

  if (!req.user) {
    throw new UnauthorizedException();
  }

  return req.user.email;
});
