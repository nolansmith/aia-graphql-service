
const { getRandomUserId } = require('./functions');
const users = require('./users');

module.exports = [{
  userId: getRandomUserId(users), id: 1, text: 'libero mauris, aliquam eu, accumsan sed, facilisis vitae, orci. Phasellus dapibus quam quis diam. Pellentesque habitant morbi tristique senectus', createdAt: '2019-01-02 05:30:32', updatedAt: '2019-08-28 12:54:44',
}, {
  userId: getRandomUserId(users), id: 2, text: 'semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque', createdAt: '2020-08-15 16:07:28', updatedAt: '2019-06-29 22:34:22',
}, {
  userId: getRandomUserId(users), id: 3, text: 'diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec, mollis vitae, posuere at, velit. Cras lorem lorem,', createdAt: '2019-05-26 14:24:38', updatedAt: '2019-11-16 15:16:50',
}, {
  userId: getRandomUserId(users), id: 4, text: 'commodo at, libero. Morbi accumsan laoreet ipsum. Curabitur consequat, lectus sit amet luctus vulputate, nisi sem semper erat, in consectetuer', createdAt: '2018-12-04 16:15:45', updatedAt: '2019-04-19 04:40:50',
}, {
  userId: getRandomUserId(users), id: 5, text: 'iaculis nec, eleifend non, dapibus rutrum, justo. Praesent luctus. Curabitur', createdAt: '2019-10-22 18:42:57', updatedAt: '2019-07-23 14:56:12',
}, {
  userId: getRandomUserId(users), id: 6, text: 'Fusce mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat', createdAt: '2019-12-15 06:08:16', updatedAt: '2020-01-24 19:58:53',
}, {
  userId: getRandomUserId(users), id: 7, text: 'magna sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in molestie', createdAt: '2019-04-08 18:44:14', updatedAt: '2019-02-04 07:05:46',
}, {
  userId: getRandomUserId(users), id: 8, text: 'nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec enim. Nunc ut erat.', createdAt: '2020-08-23 18:06:09', updatedAt: '2019-08-13 19:28:15',
}, {
  userId: getRandomUserId(users), id: 9, text: 'Aliquam rutrum lorem ac risus. Morbi metus. Vivamus euismod urna. Nullam lobortis quam a', createdAt: '2019-01-15 14:35:58', updatedAt: '2019-10-15 14:47:38',
}, {
  userId: getRandomUserId(users), id: 10, text: 'fermentum convallis ligula. Donec luctus aliquet odio. Etiam ligula tortor, dictum eu, placerat eget, venenatis a,', createdAt: '2019-01-02 08:19:22', updatedAt: '2019-03-13 08:10:30',
}, {
  userId: getRandomUserId(users), id: 11, text: 'Phasellus vitae mauris sit amet lorem semper auctor. Mauris vel turpis. Aliquam adipiscing lobortis risus.', createdAt: '2019-01-30 20:10:52', updatedAt: '2020-08-12 08:20:01',
}, {
  userId: getRandomUserId(users), id: 12, text: 'elit, dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur', createdAt: '2020-10-11 13:57:04', updatedAt: '2020-08-21 16:31:14',
}, {
  userId: getRandomUserId(users), id: 13, text: 'nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh. Phasellus nulla. Integer vulputate, risus', createdAt: '2019-03-07 20:59:51', updatedAt: '2018-12-01 20:12:01',
}, {
  userId: getRandomUserId(users), id: 14, text: 'dui, nec tempus mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin dolor. Nulla semper tellus id', createdAt: '2020-03-25 16:37:12', updatedAt: '2020-04-02 13:04:43',
}, {
  userId: getRandomUserId(users), id: 15, text: 'Duis ac arcu. Nunc mauris. Morbi', createdAt: '2020-01-16 01:37:42', updatedAt: '2019-11-03 17:52:16',
}, {
  userId: getRandomUserId(users), id: 16, text: 'faucibus lectus, a sollicitudin orci sem eget massa. Suspendisse eleifend. Cras sed leo. Cras vehicula', createdAt: '2019-10-03 08:31:57', updatedAt: '2020-04-09 23:42:20',
}, {
  userId: getRandomUserId(users), id: 17, text: 'felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras interdum. Nunc sollicitudin commodo ipsum. Suspendisse non', createdAt: '2019-11-11 03:32:02', updatedAt: '2020-08-28 18:56:20',
}, {
  userId: getRandomUserId(users), id: 18, text: 'nisi sem semper erat, in consectetuer ipsum nunc id enim. Curabitur massa. Vestibulum accumsan neque et nunc. Quisque', createdAt: '2019-11-28 18:22:56', updatedAt: '2019-03-28 02:16:17',
}, {
  userId: getRandomUserId(users), id: 19, text: 'dui. Fusce diam nunc, ullamcorper eu, euismod', createdAt: '2018-12-13 02:13:59', updatedAt: '2020-04-07 07:54:26',
}, {
  userId: getRandomUserId(users), id: 20, text: 'ut dolor dapibus gravida. Aliquam tincidunt, nunc ac mattis ornare, lectus ante dictum mi, ac mattis velit justo nec', createdAt: '2020-07-14 09:10:46', updatedAt: '2019-10-17 15:44:52',
}];

const other = [{
  userId: getRandomUserId(users), id: 21, text: 'mauris erat eget ipsum. Suspendisse sagittis. Nullam vitae diam. Proin', createdAt: '2020-07-16 16:13:23', updatedAt: '2020-11-08 03:39:47',
}, {
  userId: getRandomUserId(users), id: 22, text: 'elit, pellentesque a, facilisis non, bibendum sed, est. Nunc laoreet lectus quis massa. Mauris vestibulum, neque sed dictum eleifend,', createdAt: '2020-05-15 09:32:43', updatedAt: '2019-10-10 01:50:04',
}, {
  userId: getRandomUserId(users), id: 23, text: 'non, hendrerit id, ante. Nunc mauris sapien, cursus in, hendrerit consectetuer, cursus et, magna. Praesent interdum ligula eu', createdAt: '2020-06-20 22:11:37', updatedAt: '2018-12-12 05:45:52',
}, {
  userId: getRandomUserId(users), id: 24, text: 'ac sem ut dolor dapibus', createdAt: '2019-09-13 11:32:53', updatedAt: '2020-06-13 19:51:42',
}, {
  userId: getRandomUserId(users), id: 25, text: 'mollis. Duis sit amet diam eu dolor egestas rhoncus. Proin nisl sem, consequat nec,', createdAt: '2019-01-27 01:52:58', updatedAt: '2020-01-31 18:49:51',
}, {
  userId: getRandomUserId(users), id: 26, text: 'lorem vitae odio sagittis semper. Nam tempor diam dictum sapien. Aenean massa. Integer vitae nibh. Donec est', createdAt: '2019-07-18 09:29:47', updatedAt: '2019-11-26 14:20:31',
}, {
  userId: getRandomUserId(users), id: 27, text: 'penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit. Aliquam', createdAt: '2020-02-08 17:44:36', updatedAt: '2020-04-17 20:07:24',
}, {
  userId: getRandomUserId(users), id: 28, text: 'euismod mauris eu elit. Nulla facilisi.', createdAt: '2019-12-31 07:23:37', updatedAt: '2020-08-23 09:49:23',
}, {
  userId: getRandomUserId(users), id: 29, text: 'elementum, lorem ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non', createdAt: '2019-12-25 02:22:19', updatedAt: '2019-03-19 00:43:36',
}, {
  userId: getRandomUserId(users), id: 30, text: 'convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu erat semper rutrum. Fusce', createdAt: '2019-11-06 03:24:03', updatedAt: '2019-07-09 00:29:07',
}, {
  userId: getRandomUserId(users), id: 31, text: 'neque sed dictum eleifend, nunc risus varius orci,', createdAt: '2020-08-10 15:12:49', updatedAt: '2019-03-16 21:16:58',
}, {
  userId: getRandomUserId(users), id: 32, text: 'in, dolor. Fusce feugiat. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam auctor, velit eget', createdAt: '2020-06-05 18:50:27', updatedAt: '2020-10-18 14:20:27',
}, {
  userId: getRandomUserId(users), id: 33, text: 'eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris', createdAt: '2019-08-15 16:36:35', updatedAt: '2018-11-25 09:20:36',
}, {
  userId: getRandomUserId(users), id: 34, text: 'condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec sollicitudin adipiscing ligula. Aenean gravida nunc sed pede. Cum sociis', createdAt: '2019-01-20 21:21:16', updatedAt: '2019-09-15 00:41:07',
}, {
  userId: getRandomUserId(users), id: 35, text: 'ipsum leo elementum sem, vitae aliquam eros', createdAt: '2019-09-11 01:59:13', updatedAt: '2019-12-31 06:14:26',
}, {
  userId: getRandomUserId(users), id: 36, text: 'eu dui. Cum sociis natoque penatibus et magnis dis', createdAt: '2019-09-01 20:17:56', updatedAt: '2020-07-13 14:38:28',
}, {
  userId: getRandomUserId(users), id: 37, text: 'ullamcorper eu, euismod ac, fermentum vel, mauris. Integer sem elit, pharetra ut, pharetra sed, hendrerit a, arcu. Sed et', createdAt: '2019-04-15 14:16:36', updatedAt: '2018-12-01 10:59:02',
}, {
  userId: getRandomUserId(users), id: 38, text: 'lectus pede, ultrices a, auctor non, feugiat nec, diam. Duis mi enim,', createdAt: '2020-02-16 12:21:11', updatedAt: '2018-12-09 10:02:02',
}, {
  userId: getRandomUserId(users), id: 39, text: 'aliquam arcu. Aliquam ultrices iaculis odio. Nam interdum enim non nisi.', createdAt: '2019-10-20 17:22:45', updatedAt: '2019-09-01 07:46:06',
}, {
  userId: getRandomUserId(users), id: 40, text: 'augue ac ipsum. Phasellus vitae mauris sit amet lorem', createdAt: '2020-11-02 12:13:36', updatedAt: '2018-12-21 04:18:17',
}, {
  userId: getRandomUserId(users), id: 41, text: 'auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus', createdAt: '2019-07-15 08:37:26', updatedAt: '2019-09-27 01:28:26',
}, {
  userId: getRandomUserId(users), id: 42, text: 'Etiam gravida molestie arcu. Sed eu nibh vulputate mauris sagittis placerat. Cras dictum ultricies', createdAt: '2020-04-30 05:40:50', updatedAt: '2019-03-07 13:26:24',
}, {
  userId: getRandomUserId(users), id: 43, text: 'vulputate mauris sagittis placerat. Cras dictum ultricies ligula. Nullam', createdAt: '2020-01-08 11:01:16', updatedAt: '2019-02-10 13:29:50',
}, {
  userId: getRandomUserId(users), id: 44, text: 'sit amet ante. Vivamus non lorem', createdAt: '2019-10-30 11:30:10', updatedAt: '2018-12-15 05:46:30',
}, {
  userId: getRandomUserId(users), id: 45, text: 'Sed et libero. Proin mi. Aliquam gravida mauris ut', createdAt: '2020-02-25 23:56:20', updatedAt: '2018-11-21 09:30:37',
}, {
  userId: getRandomUserId(users), id: 46, text: 'egestas. Duis ac arcu. Nunc mauris. Morbi', createdAt: '2020-05-28 08:59:24', updatedAt: '2020-07-21 16:45:46',
}, {
  userId: getRandomUserId(users), id: 47, text: 'neque. Nullam nisl. Maecenas malesuada fringilla', createdAt: '2019-11-11 17:30:11', updatedAt: '2020-11-02 15:08:23',
}, {
  userId: getRandomUserId(users), id: 48, text: 'dictum eleifend, nunc risus varius', createdAt: '2020-08-30 21:29:12', updatedAt: '2019-04-12 01:16:31',
}, {
  userId: getRandomUserId(users), id: 49, text: 'tincidunt tempus risus. Donec egestas. Duis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris molestie pharetra', createdAt: '2018-12-14 04:23:56', updatedAt: '2019-05-31 09:16:44',
}, {
  userId: getRandomUserId(users), id: 50, text: 'non enim. Mauris quis turpis vitae purus', createdAt: '2020-05-17 17:41:43', updatedAt: '2020-08-12 03:31:43',
}, {
  userId: getRandomUserId(users), id: 51, text: 'eu sem. Pellentesque ut ipsum ac mi eleifend egestas. Sed pharetra,', createdAt: '2019-07-24 23:36:45', updatedAt: '2020-06-26 16:05:07',
}, {
  userId: getRandomUserId(users), id: 52, text: 'adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper.', createdAt: '2019-09-04 12:14:47', updatedAt: '2019-08-19 22:05:37',
}, {
  userId: getRandomUserId(users), id: 53, text: 'vulputate eu, odio. Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,', createdAt: '2019-12-23 06:15:15', updatedAt: '2019-03-14 16:23:04',
}, {
  userId: getRandomUserId(users), id: 54, text: 'ridiculus mus. Proin vel arcu eu odio tristique pharetra. Quisque ac libero nec', createdAt: '2019-04-24 01:17:50', updatedAt: '2019-04-07 08:23:30',
}, {
  userId: getRandomUserId(users), id: 55, text: 'orci. Donec nibh. Quisque nonummy ipsum non arcu. Vivamus sit amet risus. Donec egestas. Aliquam nec', createdAt: '2019-07-20 12:08:44', updatedAt: '2020-04-30 18:18:45',
}, {
  userId: getRandomUserId(users), id: 56, text: 'euismod in, dolor. Fusce feugiat. Lorem ipsum dolor sit', createdAt: '2020-02-24 07:23:43', updatedAt: '2020-09-25 02:27:14',
}, {
  userId: getRandomUserId(users), id: 57, text: 'lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo at, libero. Morbi accumsan laoreet', createdAt: '2020-05-18 16:02:39', updatedAt: '2019-08-31 14:46:42',
}, {
  userId: getRandomUserId(users), id: 58, text: 'vestibulum lorem, sit amet ultricies sem magna nec quam. Curabitur vel lectus.', createdAt: '2019-10-05 22:22:34', updatedAt: '2020-02-21 17:35:59',
}, {
  userId: getRandomUserId(users), id: 59, text: 'interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac', createdAt: '2018-11-29 18:44:07', updatedAt: '2020-08-23 00:33:43',
}, {
  userId: getRandomUserId(users), id: 60, text: 'dolor. Nulla semper tellus id nunc interdum feugiat. Sed nec', createdAt: '2019-01-29 13:21:50', updatedAt: '2019-07-28 21:16:19',
}, {
  userId: getRandomUserId(users), id: 61, text: 'sed dictum eleifend, nunc risus varius orci, in consequat enim', createdAt: '2019-11-28 21:58:07', updatedAt: '2019-02-01 20:36:27',
}, {
  userId: getRandomUserId(users), id: 62, text: 'dictum eu, eleifend nec, malesuada ut, sem. Nulla interdum. Curabitur dictum.', createdAt: '2020-06-03 17:14:15', updatedAt: '2020-02-09 03:27:22',
}, {
  userId: getRandomUserId(users), id: 63, text: 'a odio semper cursus. Integer mollis. Integer', createdAt: '2019-01-14 21:56:40', updatedAt: '2019-12-13 11:44:52',
}, {
  userId: getRandomUserId(users), id: 64, text: 'nisi magna sed dui. Fusce aliquam, enim nec', createdAt: '2019-08-23 05:35:08', updatedAt: '2020-01-04 15:34:26',
}, {
  userId: getRandomUserId(users), id: 65, text: 'ligula. Aliquam erat volutpat. Nulla dignissim. Maecenas ornare egestas ligula. Nullam feugiat placerat velit. Quisque varius. Nam porttitor scelerisque', createdAt: '2020-04-25 02:05:29', updatedAt: '2019-02-04 00:09:41',
}, {
  userId: getRandomUserId(users), id: 66, text: 'orci luctus et ultrices posuere', createdAt: '2020-11-18 18:21:45', updatedAt: '2020-11-01 21:28:04',
}, {
  userId: getRandomUserId(users), id: 67, text: 'Quisque imperdiet, erat nonummy ultricies ornare, elit elit fermentum risus, at', createdAt: '2019-11-06 12:26:06', updatedAt: '2019-12-01 20:20:32',
}, {
  userId: getRandomUserId(users), id: 68, text: 'faucibus leo, in lobortis tellus justo sit amet nulla.', createdAt: '2020-03-19 17:54:11', updatedAt: '2020-03-03 07:10:40',
}, {
  userId: getRandomUserId(users), id: 69, text: 'in sodales elit erat vitae', createdAt: '2020-05-01 23:50:16', updatedAt: '2020-03-03 05:58:51',
}, {
  userId: getRandomUserId(users), id: 70, text: 'varius orci, in consequat enim diam vel arcu. Curabitur ut odio vel est tempor bibendum.', createdAt: '2020-01-14 21:41:45', updatedAt: '2020-02-08 11:00:14',
}, {
  userId: getRandomUserId(users), id: 71, text: 'ultricies adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus,', createdAt: '2020-03-26 21:24:10', updatedAt: '2018-11-28 03:39:30',
}, {
  userId: getRandomUserId(users), id: 72, text: 'urna suscipit nonummy. Fusce fermentum fermentum arcu. Vestibulum ante ipsum', createdAt: '2019-09-02 20:41:26', updatedAt: '2019-05-30 00:58:48',
}, {
  userId: getRandomUserId(users), id: 73, text: 'Vivamus nibh dolor, nonummy ac, feugiat non, lobortis quis, pede. Suspendisse dui. Fusce diam nunc, ullamcorper eu,', createdAt: '2019-09-10 23:01:47', updatedAt: '2019-09-17 14:01:49',
}, {
  userId: getRandomUserId(users), id: 74, text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel nisl. Quisque fringilla euismod', createdAt: '2018-11-19 12:17:14', updatedAt: '2020-02-08 01:50:02',
}, {
  userId: getRandomUserId(users), id: 75, text: 'sodales purus, in molestie tortor nibh sit amet orci. Ut sagittis', createdAt: '2020-05-15 09:42:39', updatedAt: '2020-09-25 22:31:44',
}, {
  userId: getRandomUserId(users), id: 76, text: 'justo. Praesent luctus. Curabitur egestas nunc sed libero. Proin', createdAt: '2019-08-27 15:41:54', updatedAt: '2019-05-22 04:54:54',
}, {
  userId: getRandomUserId(users), id: 77, text: 'adipiscing, enim mi tempor lorem, eget mollis lectus pede et risus. Quisque libero lacus, varius et, euismod et, commodo', createdAt: '2019-04-30 13:17:58', updatedAt: '2020-06-13 21:53:05',
}, {
  userId: getRandomUserId(users), id: 78, text: 'euismod in, dolor. Fusce feugiat. Lorem', createdAt: '2020-06-10 21:45:42', updatedAt: '2019-09-21 15:23:36',
}, {
  userId: getRandomUserId(users), id: 79, text: 'Duis mi enim, condimentum eget, volutpat ornare, facilisis eget, ipsum. Donec', createdAt: '2019-02-05 07:24:59', updatedAt: '2019-04-18 05:18:46',
}, {
  userId: getRandomUserId(users), id: 80, text: 'ut aliquam iaculis, lacus pede sagittis augue, eu tempor erat neque non quam. Pellentesque habitant morbi tristique senectus et', createdAt: '2019-05-10 03:25:54', updatedAt: '2018-12-11 10:23:44',
}, {
  userId: getRandomUserId(users), id: 81, text: 'sapien. Aenean massa. Integer vitae nibh. Donec est mauris,', createdAt: '2019-05-04 10:46:12', updatedAt: '2019-05-23 17:31:25',
}, {
  userId: getRandomUserId(users), id: 82, text: 'inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus.', createdAt: '2020-09-30 03:32:11', updatedAt: '2019-02-22 20:12:06',
}, {
  userId: getRandomUserId(users), id: 83, text: 'luctus et ultrices posuere cubilia Curae; Donec tincidunt. Donec vitae erat vel pede blandit congue. In', createdAt: '2019-03-30 12:51:53', updatedAt: '2019-05-14 01:43:30',
}, {
  userId: getRandomUserId(users), id: 84, text: 'inceptos hymenaeos. Mauris ut quam vel sapien imperdiet ornare. In faucibus.', createdAt: '2019-08-11 13:43:39', updatedAt: '2019-02-26 21:37:04',
}, {
  userId: getRandomUserId(users), id: 85, text: 'urna, nec luctus felis purus ac tellus. Suspendisse sed dolor. Fusce', createdAt: '2019-09-09 02:32:42', updatedAt: '2019-12-07 12:09:17',
}, {
  userId: getRandomUserId(users), id: 86, text: 'consectetuer, cursus et, magna. Praesent interdum ligula eu enim.', createdAt: '2020-07-31 11:03:34', updatedAt: '2020-01-13 02:24:51',
}, {
  userId: getRandomUserId(users), id: 87, text: 'Morbi neque tellus, imperdiet non, vestibulum nec, euismod in, dolor. Fusce feugiat. Lorem ipsum dolor', createdAt: '2019-10-14 08:23:08', updatedAt: '2019-03-30 09:54:37',
}, {
  userId: getRandomUserId(users), id: 88, text: 'sodales purus, in molestie tortor nibh sit', createdAt: '2019-02-09 17:10:21', updatedAt: '2020-05-24 20:50:52',
}, {
  userId: getRandomUserId(users), id: 89, text: 'ullamcorper, velit in aliquet lobortis, nisi nibh lacinia orci,', createdAt: '2020-02-22 20:08:28', updatedAt: '2020-07-27 09:27:21',
}, {
  userId: getRandomUserId(users), id: 90, text: 'felis, adipiscing fringilla, porttitor vulputate, posuere vulputate, lacus. Cras', createdAt: '2020-10-08 20:15:58', updatedAt: '2019-12-13 03:58:13',
}, {
  userId: getRandomUserId(users), id: 91, text: 'vitae, erat. Vivamus nisi. Mauris nulla. Integer urna. Vivamus molestie dapibus ligula. Aliquam', createdAt: '2019-11-01 05:42:38', updatedAt: '2019-05-04 04:40:30',
}, {
  userId: getRandomUserId(users), id: 92, text: 'sed dui. Fusce aliquam, enim nec tempus scelerisque, lorem ipsum sodales purus, in', createdAt: '2020-08-08 06:42:38', updatedAt: '2020-10-27 09:46:18',
}, {
  userId: getRandomUserId(users), id: 93, text: 'luctus, ipsum leo elementum sem, vitae aliquam eros turpis non enim. Mauris quis turpis vitae purus gravida sagittis. Duis', createdAt: '2020-06-13 03:34:13', updatedAt: '2020-09-29 21:44:08',
}, {
  userId: getRandomUserId(users), id: 94, text: 'Cras convallis convallis dolor. Quisque tincidunt pede ac urna. Ut tincidunt vehicula risus. Nulla eget metus eu', createdAt: '2019-02-08 01:56:01', updatedAt: '2019-07-12 09:46:43',
}, {
  userId: getRandomUserId(users), id: 95, text: 'ultrices a, auctor non, feugiat nec, diam. Duis mi enim,', createdAt: '2019-11-13 00:24:42', updatedAt: '2018-12-22 15:19:49',
}, {
  userId: getRandomUserId(users), id: 96, text: 'natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel arcu eu odio tristique pharetra.', createdAt: '2019-11-29 13:46:04', updatedAt: '2019-09-15 18:06:44',
}, {
  userId: getRandomUserId(users), id: 97, text: 'Etiam vestibulum massa rutrum magna. Cras convallis convallis dolor. Quisque tincidunt', createdAt: '2019-03-02 20:33:54', updatedAt: '2020-11-03 08:45:57',
}, {
  userId: getRandomUserId(users), id: 98, text: 'at, velit. Pellentesque ultricies dignissim lacus. Aliquam rutrum lorem ac risus. Morbi', createdAt: '2019-11-10 14:49:41', updatedAt: '2020-01-27 01:00:00',
}, {
  userId: getRandomUserId(users), id: 99, text: 'magnis dis parturient montes, nascetur ridiculus mus. Aenean eget', createdAt: '2019-11-01 05:08:26', updatedAt: '2019-08-11 02:31:40',
}, {
  userId: getRandomUserId(users), id: 100, text: 'tellus eu augue porttitor interdum. Sed auctor odio a purus. Duis elementum, dui', createdAt: '2019-08-26 04:04:26', updatedAt: '2020-04-11 01:46:29',
}];
