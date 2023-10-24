const reason=localStorage.getItem('time_v');
const time=localStorage.getItem('reason_v');
const amount=localStorage.getItem('amount_v');
const accounts=document.querySelector('.dynamic');
accounts.innerHTML=`
<div class="nav-bar">
<nav>
  <div class="left-section">
  <button class="inputs">Account</button>
  <button class="Total">Totals</button>
</div>
<div class="right-section">
  <h1 class="logo">Money Manager</h1>
</div>
</nav>
</div>
<table>
<tr>
  <th>Date</th>
  <th>Reason</th>
  <th>Amount</th>
</tr>
<tr class='new_rows'>
  <td class="time_col">${time}</td>
  <td class="reason_col">${reason}</td>
  <td class="amount_col">${amount}</td>
</tr>

</table>
`
const new_rows=document.querySelector('.new_rows');
const time_column=document.querySelector('.time_col');
const reason_column=document.querySelector('.reason_col');
const amount_column=document.querySelector('.amount_col');

