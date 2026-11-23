import type { Lang } from '../i18n/ui';

type L = Record<Lang, string>;

export interface RoleInfo {
  id: string;
  name: L;
  team: 'wolf' | 'village';
  /** Default minimum players for the role to be dealt; undefined = always in the game. */
  fromPlayers?: number;
  ability: L;
}

/** Source: werewolf-discord docs/00-ssot/service-scope.md BR-002, BR-003, BR-012..BR-014. */
export const ROLES: RoleInfo[] = [
  {
    id: 'werewolf',
    name: { en: 'Werewolf', vi: 'Ma Sói' },
    team: 'wolf',
    ability: {
      en: 'Each night the Werewolves choose one victim together. They know who the other Werewolves are.',
      vi: 'Mỗi đêm bầy Sói cùng chọn một nạn nhân. Sói biết đồng đội của mình là ai.',
    },
  },
  {
    id: 'villager',
    name: { en: 'Villager', vi: 'Dân Làng' },
    team: 'village',
    ability: {
      en: 'No night action. Discuss, find the Werewolves and vote them out.',
      vi: 'Không có hành động ban đêm. Thảo luận, tìm ra Sói và bỏ phiếu loại chúng.',
    },
  },
  {
    id: 'seer',
    name: { en: 'Seer', vi: 'Tiên Tri' },
    team: 'village',
    fromPlayers: 5,
    ability: {
      en: 'Each night, inspect one player and learn privately whether they are a Werewolf.',
      vi: 'Mỗi đêm soi một người và biết riêng người đó có phải Sói hay không.',
    },
  },
  {
    id: 'guard',
    name: { en: 'Guard', vi: 'Bảo Vệ' },
    team: 'village',
    fromPlayers: 5,
    ability: {
      en: 'Each night, protect one player (yourself included) from the Werewolves. You cannot protect the same player two nights in a row.',
      vi: 'Mỗi đêm bảo vệ một người (kể cả bản thân) khỏi Sói. Không được bảo vệ cùng một người hai đêm liên tiếp.',
    },
  },
  {
    id: 'hunter',
    name: { en: 'Hunter', vi: 'Thợ Săn' },
    team: 'village',
    fromPlayers: 7,
    ability: {
      en: 'When you die (except by poison), you may shoot one player, who dies immediately.',
      vi: 'Khi chết (trừ khi bị đầu độc), bạn được bắn một người, người đó chết ngay lập tức.',
    },
  },
  {
    id: 'witch',
    name: { en: 'Witch', vi: 'Phù Thuỷ' },
    team: 'village',
    fromPlayers: 8,
    ability: {
      en: 'One save potion and one poison potion per game, at most one per night. While you still have the save potion, you see who the Werewolves attacked.',
      vi: 'Có một bình cứu và một bình độc cho cả ván, mỗi đêm dùng tối đa một bình. Khi còn bình cứu, bạn được biết Sói đã cắn ai.',
    },
  },
  {
    id: 'elder',
    name: { en: 'Elder', vi: 'Già Làng' },
    team: 'village',
    fromPlayers: 9,
    ability: {
      en: 'Survives the first Werewolf attack. Poison, a lynch or the Hunter’s shot still kill the Elder.',
      vi: 'Sống sót qua lần đầu bị Sói cắn. Bình độc, bị treo cổ hoặc bị Thợ Săn bắn thì vẫn chết.',
    },
  },
];

/** Werewolves per player count (BR-002 defaults). */
export const WOLF_TIERS = [
  { players: '5–6', wolves: 1 },
  { players: '7–9', wolves: 2 },
  { players: '10–12', wolves: 3 },
];

export interface CommandInfo {
  name: string;
  who: L;
  what: L;
}

/** Source: werewolf-discord docs/00-ssot/api-contracts.md §2 (implemented commands only). */
export const COMMANDS: CommandInfo[] = [
  {
    name: '/werewolf help',
    who: { en: 'Anyone', vi: 'Mọi người' },
    what: {
      en: 'How to play, the current timings and the roles enabled on this bot.',
      vi: 'Cách chơi, thời gian hiện tại của từng pha và các vai trò đang bật.',
    },
  },
  {
    name: '/werewolf create',
    who: { en: 'Anyone in the channel', vi: 'Bất kỳ ai trong kênh' },
    what: {
      en: 'Opens a lobby in this channel. You become the host.',
      vi: 'Mở phòng chờ trong kênh. Bạn trở thành chủ phòng.',
    },
  },
  {
    name: '/werewolf join',
    who: { en: 'Anyone', vi: 'Mọi người' },
    what: { en: 'Joins the lobby.', vi: 'Vào phòng chờ.' },
  },
  {
    name: '/werewolf leave',
    who: { en: 'Lobby member', vi: 'Người trong phòng chờ' },
    what: {
      en: 'Leaves the lobby. If the host leaves, the next player becomes host.',
      vi: 'Rời phòng chờ. Nếu chủ phòng rời đi, người vào sớm nhất tiếp theo làm chủ phòng.',
    },
  },
  {
    name: '/werewolf start',
    who: { en: 'Host', vi: 'Chủ phòng' },
    what: { en: 'Deals the roles and starts the game.', vi: 'Chia vai và bắt đầu ván.' },
  },
  {
    name: '/werewolf cancel',
    who: { en: 'Host or server admin', vi: 'Chủ phòng hoặc admin server' },
    what: { en: 'Cancels the game.', vi: 'Huỷ ván.' },
  },
  {
    name: '/werewolf status',
    who: { en: 'Anyone', vi: 'Mọi người' },
    what: {
      en: 'Shows the phase, who is alive and the role composition.',
      vi: 'Xem pha hiện tại, ai còn sống và thành phần vai trò.',
    },
  },
  {
    name: '/werewolf role',
    who: { en: 'Player', vi: 'Người chơi' },
    what: {
      en: 'Shows your role privately (and your fellow Werewolves).',
      vi: 'Xem riêng vai trò của bạn (và đồng đội Sói).',
    },
  },
  {
    name: '/werewolf night',
    who: { en: 'Player with a night action', vi: 'Người có hành động ban đêm' },
    what: {
      en: 'Opens your private night action menu.',
      vi: 'Mở menu hành động ban đêm (chỉ bạn thấy).',
    },
  },
  {
    name: '/werewolf vote target:@player',
    who: { en: 'Alive player', vi: 'Người còn sống' },
    what: {
      en: 'Votes to eliminate a player. You can change your vote until voting ends.',
      vi: 'Bỏ phiếu loại một người. Có thể đổi phiếu cho đến khi hết giờ bỏ phiếu.',
    },
  },
  {
    name: '/ping',
    who: { en: 'Anyone', vi: 'Mọi người' },
    what: { en: 'Checks that the bot is online.', vi: 'Kiểm tra bot có đang hoạt động không.' },
  },
];

export interface Faq {
  q: L;
  a: L;
}

export const FAQ: Faq[] = [
  {
    q: {
      en: 'The bot says it is missing permissions in this channel',
      vi: 'Bot báo thiếu quyền trong kênh',
    },
    a: {
      en: 'A server admin opens the channel settings → Permissions, adds the bot (or its role) and allows <strong>View Channel</strong> and <strong>Send Messages</strong> (in threads also <strong>Send Messages in Threads</strong>). Then try again; no restart is needed.',
      vi: 'Admin server mở cài đặt kênh → Quyền hạn, thêm bot (hoặc role của bot) và cho phép <strong>Xem kênh</strong> và <strong>Gửi tin nhắn</strong> (trong thread cần thêm <strong>Gửi tin nhắn trong thread</strong>). Sau đó thử lại, không cần khởi động lại gì.',
    },
  },
  {
    q: {
      en: 'I can’t see the /werewolf commands',
      vi: 'Tôi không thấy lệnh /werewolf',
    },
    a: {
      en: 'Commands can take a little while to appear after the bot is added. Restart Discord (Ctrl+R on desktop). Also check that the server allows <em>Use Application Commands</em> for your role in that channel.',
      vi: 'Lệnh có thể mất một lúc mới hiện ra sau khi thêm bot. Hãy tải lại Discord (Ctrl+R trên máy tính). Kiểm tra thêm quyền <em>Dùng lệnh ứng dụng</em> của role bạn trong kênh đó.',
    },
  },
  {
    q: { en: 'How many players do we need?', vi: 'Cần bao nhiêu người chơi?' },
    a: {
      en: '5 to 12 players by default. Bigger games add more Werewolves and special roles.',
      vi: 'Mặc định từ 5 đến 12 người. Ván càng đông thì càng nhiều Sói và vai đặc biệt.',
    },
  },
  {
    q: { en: 'Where do I see my role?', vi: 'Xem vai trò của mình ở đâu?' },
    a: {
      en: 'Press <strong>My role</strong> on the game message or use <code>/werewolf role</code>. Only you can see the answer; the bot never sends DMs.',
      vi: 'Bấm nút <strong>Vai của tôi</strong> trên tin nhắn của ván hoặc dùng <code>/werewolf role</code>. Chỉ bạn thấy câu trả lời; bot không gửi tin nhắn riêng (DM).',
    },
  },
  {
    q: { en: 'Can dead players talk?', vi: 'Người chết có được nói chuyện không?' },
    a: {
      en: 'No — dead players should stay silent in the game channel. The bot reminds them but does not mute anyone.',
      vi: 'Không — người đã chết nên im lặng trong kênh chơi. Bot sẽ nhắc nhưng không tự tắt tiếng ai.',
    },
  },
  {
    q: { en: 'What happens on a tie vote?', vi: 'Hoà phiếu thì sao?' },
    a: {
      en: 'Nobody is eliminated. The same happens if nobody votes.',
      vi: 'Không ai bị loại. Không ai bỏ phiếu cũng vậy.',
    },
  },
  {
    q: { en: 'The bot restarted during our game', vi: 'Bot khởi động lại giữa ván' },
    a: {
      en: 'Games are saved and resume automatically after a restart. If a game looks stuck, use <code>/werewolf status</code>; the host or an admin can <code>/werewolf cancel</code> it.',
      vi: 'Ván chơi được lưu và tự chạy tiếp sau khi bot khởi động lại. Nếu ván có vẻ bị kẹt, dùng <code>/werewolf status</code>; chủ phòng hoặc admin có thể <code>/werewolf cancel</code>.',
    },
  },
  {
    q: { en: 'Does the bot read our messages?', vi: 'Bot có đọc tin nhắn của chúng tôi không?' },
    a: {
      en: 'No. It only receives its own commands and button clicks. See the privacy policy.',
      vi: 'Không. Bot chỉ nhận lệnh và lượt bấm nút của chính nó. Xem chính sách quyền riêng tư.',
    },
  },
];
