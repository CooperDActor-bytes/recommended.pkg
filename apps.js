const apps = {
    mac: [
    { name: "Audacity", description: "Audio editing and recording tool.", link: "https://www.audacityteam.org/" },
    { name: "LibreOffice", description: "Free alternative to Microsoft Office.", link: "https://www.libreoffice.org/" },
    { name: "VLC Media Player", description: "Open-source media player.", link: "https://www.videolan.org/vlc/" },
    { name: "GIMP", description: "Free image editing tool.", link: "https://www.gimp.org/" },
    { name: "Inkscape", description: "Open-source vector graphics editor.", link: "https://inkscape.org/" },
    { name: "Brave Browser", description: "Privacy-focused web browser.", link: "https://brave.com/" },
    { name: "Blender", description: "3D modeling and animation tool.", link: "https://www.blender.org/" },
    { name: "HandBrake", description: "Open-source video transcoder.", link: "https://handbrake.fr/" },
    { name: "OpenShot", description: "Video editing software.", link: "https://www.openshot.org/" },
    { name: "Krita", description: "Digital painting and illustration software.", link: "https://krita.org/" },
    { name: "Darktable", description: "Photography workflow tool.", link: "https://www.darktable.org/" },
    { name: "Nextcloud", description: "Private cloud platform.", link: "https://nextcloud.com/" },
    { name: "KeePassXC", description: "Password manager.", link: "https://keepassxc.org/" },
    { name: "Thunderbird", description: "Email client.", link: "https://www.mozilla.org/en-US/thunderbird/" },
    { name: "OBS Studio", description: "Live streaming and screen recording software.", link: "https://obsproject.com/" },
    { name: "Calibre", description: "E-book management software.", link: "https://calibre-ebook.com/" },
    { name: "Transmission", description: "BitTorrent client.", link: "https://transmissionbt.com/" },
    { name: "Shotcut", description: "Video editing software.", link: "https://shotcut.org/" },
    { name: "FreeCAD", description: "Open-source parametric 3D CAD modeler.", link: "https://www.freecadweb.org/" },
    { name: "FileZilla", description: "FTP client.", link: "https://filezilla-project.org/" },
    { name: "Zotero", description: "Reference management software.", link: "https://www.zotero.org/" },
    { name: "TeXstudio", description: "LaTeX editor for creating documents.", link: "https://www.texstudio.org/" },
    { name: "Signal", description: "End-to-end encrypted messaging app.", link: "https://signal.org/" },
    { name: "VSCodium", description: "Open-source version of Visual Studio Code.", link: "https://vscodium.com/" },
    { name: "Pencil2D", description: "Open-source 2D animation software.", link: "https://www.pencil2d.org/" },
    { name: "GParted", description: "Partition editor for managing disk partitions.", link: "https://gparted.org/" },
    { name: "PyCharm Community Edition", description: "Python IDE for developers.", link: "https://www.jetbrains.com/pycharm/" },
    { name: "Jitsi Meet", description: "Open-source video conferencing software.", link: "https://jitsi.org/jitsi-meet/" },
    { name: "Atom", description: "Text editor for coding.", link: "https://atom.io/" },
    { name: "Keepass", description: "Password manager.", link: "https://keepass.info/" },
    { name: "Riot.im", description: "Collaborative messaging and chat platform.", link: "https://element.io/" },
    { name: "Miro", description: "Collaborative whiteboard tool.", link: "https://miro.com/" },
    { name: "Audacious", description: "Open-source music player.", link: "https://audacious-media-player.org/" },
    { name: "Vim", description: "Text editor with an emphasis on efficiency.", link: "https://www.vim.org/" },
    { name: "Kdenlive", description: "Video editor for Linux and other platforms.", link: "https://kdenlive.org/" },
    { name: "XMind", description: "Mind-mapping software.", link: "https://www.xmind.net/" },
    { name: "Joplin", description: "Note-taking and task management software.", link: "https://joplinapp.org/" },
    { name: "Subsurface", description: "Scuba diving logbook software.", link: "https://subsurface-divelog.org/" },
    { name: "Qutebrowser", description: "Keyboard-focused web browser.", link: "https://qutebrowser.org/" }
  ],
  windows: [
    { name: "Audacity", description: "Audio editing and recording tool.", link: "https://www.audacityteam.org/" },
    { name: "LibreOffice", description: "Free alternative to Microsoft Office.", link: "https://www.libreoffice.org/" },
    { name: "VLC Media Player", description: "Open-source media player.", link: "https://www.videolan.org/vlc/" },
    { name: "GIMP", description: "Free image editing tool.", link: "https://www.gimp.org/" },
    { name: "Inkscape", description: "Open-source vector graphics editor.", link: "https://inkscape.org/" },
    { name: "Brave Browser", description: "Privacy-focused web browser.", link: "https://brave.com/" },
    { name: "Blender", description: "3D modeling and animation tool.", link: "https://www.blender.org/" },
    { name: "HandBrake", description: "Open-source video transcoder.", link: "https://handbrake.fr/" },
    { name: "OpenShot", description: "Video editing software.", link: "https://www.openshot.org/" },
    { name: "Krita", description: "Digital painting and illustration software.", link: "https://krita.org/" },
    { name: "Darktable", description: "Photography workflow tool.", link: "https://www.darktable.org/" },
    { name: "KeePassXC", description: "Password manager.", link: "https://keepassxc.org/" },
    { name: "Thunderbird", description: "Email client.", link: "https://www.mozilla.org/en-US/thunderbird/" },
    { name: "OBS Studio", description: "Live streaming and screen recording software.", link: "https://obsproject.com/" },
    { name: "Calibre", description: "E-book management software.", link: "https://calibre-ebook.com/" },
    { name: "Transmission", description: "BitTorrent client.", link: "https://transmissionbt.com/" },
    { name: "Shotcut", description: "Video editing software.", link: "https://shotcut.org/" },
    { name: "FreeCAD", description: "Open-source parametric 3D CAD modeler.", link: "https://www.freecadweb.org/" },
    { name: "FileZilla", description: "FTP client.", link: "https://filezilla-project.org/" },
    { name: "Zotero", description: "Reference management software.", link: "https://www.zotero.org/" },
    { name: "TeXstudio", description: "LaTeX editor for creating documents.", link: "https://www.texstudio.org/" },
    { name: "Signal", description: "End-to-end encrypted messaging app.", link: "https://signal.org/" },
    { name: "VSCodium", description: "Open-source version of Visual Studio Code.", link: "https://vscodium.com/" },
    { name: "Pencil2D", description: "Open-source 2D animation software.", link: "https://www.pencil2d.org/" },
    { name: "GParted", description: "Partition editor for managing disk partitions.", link: "https://gparted.org/" },
    { name: "PyCharm Community Edition", description: "Python IDE for developers.", link: "https://www.jetbrains.com/pycharm/" },
    { name: "Jitsi Meet", description: "Open-source video conferencing software.", link: "https://jitsi.org/jitsi-meet/" },
    { name: "Atom", description: "Text editor for coding.", link: "https://atom.io/" },
    { name: "Keepass", description: "Password manager.", link: "https://keepass.info/" },
    { name: "Riot.im", description: "Collaborative messaging and chat platform.", link: "https://element.io/" },
    { name: "Miro", description: "Collaborative whiteboard tool.", link: "https://miro.com/" }
  ],
  debian: [
    { name: "LibreOffice", description: "Full-featured office suite.", link: "https://www.libreoffice.org/" },
    { name: "GIMP", description: "Free and open-source image editor.", link: "https://www.gimp.org/" },
    { name: "Krita", description: "Digital painting and illustration software.", link: "https://krita.org/" },
    { name: "VLC Media Player", description: "Open-source media player.", link: "https://www.videolan.org/vlc/" },
    { name: "qBittorrent", description: "Torrent client.", link: "https://www.qbittorrent.org/" },
    { name: "OBS Studio", description: "Live streaming and screen recording software.", link: "https://obsproject.com/" },
    { name: "Inkscape", description: "Open-source vector graphics editor.", link: "https://inkscape.org/" },
    { name: "Darktable", description: "Photography workflow app.", link: "https://www.darktable.org/" },
    { name: "Nextcloud", description: "Private cloud platform.", link: "https://nextcloud.com/" },
    { name: "KeePassXC", description: "Password manager.", link: "https://keepassxc.org/" },
    { name: "Transmission", description: "BitTorrent client.", link: "https://transmissionbt.com/" },
    { name: "Calibre", description: "E-book management software.", link: "https://calibre-ebook.com/" },
    { name: "Brave Browser", description: "Privacy-focused web browser.", link: "https://brave.com/" },
    { name: "LibreOffice", description: "Full-featured office suite.", link: "https://www.libreoffice.org/" },
    { name: "VLC Media Player", description: "Media player for various audio and video formats.", link: "https://www.videolan.org/vlc/" }
  ]
};

// Function to dynamically load the apps into the respective platform container
function loadApps() {
  // Load Mac Apps
  const macContainer = document.getElementById('mac-apps');
  apps.mac.forEach(app => {
    const card = document.createElement('div');
    card.classList.add('app-card');
    card.innerHTML = `
      <h3>${app.name}</h3>
      <p>${app.description}</p>
      <a href="${app.link}" target="_blank">Download</a>
    `;
    macContainer.appendChild(card);
  });

  // Load Windows Apps
  const windowsContainer = document.getElementById('windows-apps');
  apps.windows.forEach(app => {
    const card = document.createElement('div');
    card.classList.add('app-card');
    card.innerHTML = `
      <h3>${app.name}</h3>
      <p>${app.description}</p>
      <a href="${app.link}" target="_blank">Download</a>
    `;
    windowsContainer.appendChild(card);
  });

  // Load Debian Apps
  const debianContainer = document.getElementById('debian-apps');
  apps.debian.forEach(app => {
    const card = document.createElement('div');
    card.classList.add('app-card');
    card.innerHTML = `
      <h3>${app.name}</h3>
      <p>${app.description}</p>
      <a href="${app.link}" target="_blank">Download</a>
    `;
    debianContainer.appendChild(card);
  });
}

// Call the loadApps function when the page is loaded
window.onload = loadApps;

