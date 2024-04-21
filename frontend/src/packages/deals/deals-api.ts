import { HttpApi } from '~/libs/packages/api/api.js';
import { type IStorage } from '~/libs/packages/storage/storage.js';
import { type IHttp } from '~/libs/packages/http/http.js';
import { ApiPath, ContentType } from '~/libs/enums/enums.js';
import {
  type DealGetAllResponseDto,
  DealsApiPath,
} from '~/packages/deals/deals.js';

type Constructor = {
  baseUrl: string;
  http: IHttp;
  storage: IStorage;
};
class DealsApi extends HttpApi {
  public constructor({ baseUrl, http, storage }: Constructor) {
    super({ baseUrl, http, storage, path: ApiPath.DEALS });
  }

  public async getAll(): Promise<DealGetAllResponseDto> {
    const response = await this.load(
      this.getFullEndpoint(DealsApiPath.ROOT, {}),
      {
        method: 'GET',
        contentType: ContentType.JSON,
        hasAuth: false,
      },
    );

    return await response.json<DealGetAllResponseDto>();
  }
}

export { DealsApi };
