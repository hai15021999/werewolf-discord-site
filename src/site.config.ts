/** Facts about the bot shown on the site. Keep in sync with the werewolf-discord repository. */
export const BOT = {
  name: 'Wolfverine',
  applicationId: '1572903368375009380',
  /** View Channel + Send Messages; the bot explains anything missing per channel. */
  permissions: '3072',
  contactEmail: 'hai15021999@gmail.com',
  /** Date the privacy policy and terms take effect (ISO). */
  legalEffectiveDate: '2026-11-23',
} as const;

export const INVITE_URL = `https://discord.com/oauth2/authorize?client_id=${BOT.applicationId}&scope=bot%20applications.commands&permissions=${BOT.permissions}`;

/** Defaults from the bot's game rules (BR-001, BR-002, BR-006). The owner can tune them. */
export const DEFAULTS = {
  minPlayers: 5,
  maxPlayers: 12,
  nightSec: 60,
  daySec: 120,
  votingSec: 60,
  witchSec: 30,
  hunterSec: 30,
  lobbyMin: 15,
} as const;
