/******************************************\
 *  ____  _            ____  _         _  *
 * | __ )| |_   _  ___| __ )(_)_ __ __| | *
 * |  _ \| | | | |/ _ \  _ \| | '__/ _` | *
 * | |_) | | |_| |  __/ |_) | | | | (_| | *
 * |____/|_|\__,_|\___|____/|_|_|  \__,_| *
 *                                        *
 * This file is licensed under the GNU    *
 * General Public License 3. To use or    *
 * modify it you must accept the terms    *
 * of the license.                        *
 * ___________________________            *
 * \ @author BlueBirdMC Team /            *
\******************************************/

const DataPacket = require("./DataPacket");
const Identifiers = require("./Identifiers");

class PlayStatusPacket extends DataPacket {
	static NETWORK_ID = Identifiers.PLAY_STATUS_PACKET;

	static LOGIN_SUCCESS = 0;

	static LOGIN_FAILED_CLIENT = 1;

	static LOGIN_FAILED_SERVER = 2;

	static PLAYER_SPAWN = 3;

	static LOGIN_FAILED_INVALID_TENANT = 4;

	static LOGIN_FAILED_VANILLA_EDU = 5;

	static LOGIN_FAILED_EDU_VANILLA = 6;

	/** @type {number} */
	status;

	canBeSentBeforeLogin = true;

	decodePayload() {
		this.status = this.readIntBE();
	}

	encodePayload() {
		this.writeIntBE(this.status);
	}
}

module.exports = PlayStatusPacket;
