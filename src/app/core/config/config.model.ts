export interface IAppConfig {
    env: {
      name: string;
      baseUrl: string;
    };
    arelement: {
      api: string;
    };
    datamining: {
      api: string;
    };
    permission: {
      user: {
        api: string;
        command: {
          getAuthenticationByuid: string;
        };
      };
      group: {
        api: string;
      };
      role: {
        api: string;
      }
    };
    listModule: {
      api: string;
    };
    listStudent: {
      api: string;
    };
    route: {
        root: string;
        auth: string;
        home: string;
        listStudent: string;
        listModule: string;
    };
    session: {
      timeout: number;
      unit: string;
    };
  }
