export default {
  '1Env1DB': [
    {
      name: 'project',
      type: 'project',
      children: [
        {
          name: 'dev',
          type: 'env',
          children: [
            {
              name: 'project_dev',
              type: 'db',
              children: [],
              connection: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'password',
                database: 'project_dev',
                ssl: {
                  ca: '',
                  key: '',
                  cert: ''
                }
              }
            }
          ]
        }
        // {
        //   name: "test",
        //   type: "env",
        //   children: []
        // }
      ]
    }
  ],
  '2Env1DB': [
    {
      name: 'project',
      type: 'project',
      children: [
        {
          name: 'dev',
          type: 'env',
          children: [
            {
              name: 'project_dev',
              type: 'db',
              children: [],
              connection: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'password',
                database: 'project_dev',
                ssl: {
                  ca: '',
                  key: '',
                  cert: ''
                }
              }
            }
          ]
        },
        {
          name: 'test',
          type: 'env',
          children: [
            {
              name: 'project_test',
              type: 'db',
              children: [],
              connection: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'password',
                database: 'project_test',
                ssl: {
                  ca: '',
                  key: '',
                  cert: ''
                }
              }
            }
          ]
        }
      ]
    }
  ],
  '2Env2DB': [
    {
      name: 'project',
      type: 'project',
      children: [
        {
          name: 'dev',
          type: 'env',
          children: [
            {
              name: 'project_dev_1',
              type: 'db',
              children: [],
              connection: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'password',
                database: 'project_dev_1',
                ssl: {
                  ca: '',
                  key: '',
                  cert: ''
                }
              }
            },
            {
              name: 'project_dev_2',
              type: 'db',
              children: [],
              connection: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'password',
                database: 'project_dev_2',
                ssl: {
                  ca: '',
                  key: '',
                  cert: ''
                }
              }
            }
          ]
        },
        {
          name: 'test',
          type: 'env',
          children: [
            {
              name: 'project_test_1',
              type: 'db',
              children: [],
              connection: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'password',
                database: 'project_test_1',
                ssl: {
                  ca: '',
                  key: '',
                  cert: ''
                }
              }
            },
            {
              name: 'project_test_2',
              type: 'db',
              children: [],
              connection: {
                host: 'localhost',
                port: '3306',
                user: 'root',
                password: 'password',
                database: 'project_test_2',
                ssl: {
                  ca: '',
                  key: '',
                  cert: ''
                }
              }
            }
          ]
        }
      ]
    }
  ]
}
/**
 * @copyright Copyright (c) 2021, Xgene Cloud Ltd
 *
 * @author Naveen MR <oof1lab@gmail.com>
 * @author Pranav C Balan <pranavxc@gmail.com>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */
