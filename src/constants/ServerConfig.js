const mode =  process.env.REACT_APP_MODE

const config = {
	url: {
		account: {
			dev: 'http://localhost:3000',
			stg: 'http://localhost:3000',
			prod: 'http://localhost:3000'
		}
	},
	key: {
		account: {
			dev: 'e84974031-c9a7-4600-b530-f75207ead757',
			stg: 'e84974031-c9a7-4600-b530-f75207ead757',
			prod: 'e84974031-c9a7-4600-b530-f75207ead757'
		}
	}
}

export const host = {
	url: {
		account: config.url.account[mode]
	},
	key: {
		account: config.key.account[mode]
	}
}



