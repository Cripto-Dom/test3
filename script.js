const connectButton = document.getElementById('connectButton');
const walletAddressDiv = document.getElementById('walletAddress');

connectButton.addEventListener('click', () => {
  if (typeof window.ethereum !== 'undefined') {
    window.ethereum.request({ method: 'eth_requestAccounts' })
      .then(accounts => {
        walletAddressDiv.textContent = `Адреса гаманця: ${accounts[0]}`;
      })
      .catch(err => {
        console.error('Помилка:', err);
        walletAddressDiv.textContent = 'Виникла помилка при підключенні до MetaMask.';
      });
  } else {
    walletAddressDiv.textContent = 'Будь ласка, встановіть MetaMask.';
  }
});
